<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$servicos = $_POST['servicos'];
$modelo = $_POST['modelo'];
$descricao = $_POST['descricao'];

// Substitua pelo número da loja (com DDI e DDD)
$numero_whats = '5511969259729';

$mensagem = "*Novo pedido de orçamento:*%0A"
           ."%0A"
           ."👤 *Cliente:* $nome%0A"
           ."📧 *E-mail:* $email%0A"
           ."📞 *Telefone:* $telefone%0A"
           ."🔧 *Serviço Desejado:* $servicos%0A"
           ."📱 *Modelo do Aparelho:* $modelo%0A"
           ."🧾 *Descrição do Problema:* $descricao%0A"
           ."%0A"
           ."✅ *Aguardando retorno da loja.*";


$link = "https://wa.me/$numero_whats?text=$mensagem";

header("Location: $link");
exit();
?>
