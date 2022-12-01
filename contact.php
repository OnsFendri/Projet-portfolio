<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <title>Contact</title>
</head>
<body>
        <?php
        if (isset ($_POST["message"])){
        $message= " Ce message vous a été envoyé via la page de contact du site ProjetPortfolio
        Nom :" . $_POST["firstname"]."
        Email :". $_POST["email"]."
        Message : ". $_POST["message"]:

        $retour= mail("ons.fendri@epfedu.fr", $_POST["objet"], $message, 
        "From: contact@portfolio.fr". "\r\n". "Reply-to:". $_POST["email"]);
        if ($retour){
            echo "<p>Votre message a bien été envoyé.</p>";
        }
        }
        ?>
</body>
</html>
