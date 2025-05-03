
const posts = require('../data/posts');
let lastID = posts.at(- 1).id;

function index(req, res) {
    const teg = req.query.tag;

    if (post.length === 0) {
        res.status(404)
        return res.json({
            error: 'Post not found',
            message: 'Il post non è stato trovato'
        })
    }

    console.log(`Lista dei post`)
    res.json(posts)
}

function show(req, res) {
    res.json(req.post)
}

function post(req, res) {
    const { title, content, image, tags } = req.body

    lastID++

    const newPost = {
        id: lastID,
        title,
        content,
        image,
        tags
    }

    posts.push(newPost)
    console.log(posts)
    res.send(newPost)

}

function update(req, res) {

    const id = +req.params.id // con il "+" rendi a valore intero il numero
    const post = posts.find((el) => el.id === id)
    console.log(`Aggiorno l\'elemento del post: ${id}`)

    const { title, slug, content, image, tags } = req.body

    const postUpdate = {
        title,
        slug,
        content,
        image,
        tags
    }

    res.json(postUpdate)
}

function modify(req, res) {

    const post = posts.find((el) => el.id === +req.params.id)
    console.log(`Modifico l\'elemento del post: ${id}`)

    const { title, slug, content, image, tags } = req.body

    if ({ title, slug, content, image, tags }) {
        post.title = title
        post.slug = slug
        post.content = content
        post.image = image
        post.tags = tags
    }

    res.json(post)
}

const destroy = (req, res) => {

    const postIndex = posts.findIndex((post) => post.id === +req.params.id)

    res.sendStatus(204)

    posts.splice(postIndex, 1)
    console.log(posts)
}

module.exports = { index, show, post, update, modify, destroy }