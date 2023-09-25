function status(request, responce) {
  responce.status(200).json({ chave: "são acima da média" });
}

export default status;
