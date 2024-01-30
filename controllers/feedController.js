exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        title: "Primeiro post",
        content: "Este é o meu primeiro post!",
      },
    ],
  });
};

exports.createPost = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  if (!title || !content) {
    res.status(400).json({
      error: true,
      msg: "você precisa enviar os dados corretamente!!",
    });
  }

  res.status(201).json({
    error: false,
    msg: "post criado com sucesso!!",
  });
};

exports.updatePost = (req, res, next) => {
  const postId = req.params.postId;
  res.status(200).json({
    msg: "Post realizado com sucesso!!",
    post: postId,
  });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.postId;
  res.status(200).json({
    msg: "Post excluido com sucesso!!",
    post: postId,
  });
};
