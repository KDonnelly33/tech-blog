const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');

// GET all blog posts for homepage

router.get('/', async (req, res) => {
    try {
        const blogData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', {
            blogs,
            // loggedIn: req.session.loggedIn,
        });

    } catch (err) { 
        console.log(err);
        res.status(500).json(err);
    }
}
);

// GET one blog post

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await BlogPost.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['comment', 'date_created', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            // loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
);

router.get(`/login`, (req, res) => {
    res.render(`login`)


})


module.exports = router;