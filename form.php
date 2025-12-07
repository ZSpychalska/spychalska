<?php
    $form_name = $_POST['name'];
    $form_email =$_POST['mail'];
    $form_message = $_POST['message'];
    
    $webhookURL = 'https://discordapp.com/api/webhooks/1434918394305577115/8Nc7GKSMzGoOSdeUQ4FcYe98D89Rt1P5L7DJIJUHXdQlwco-cklOd7_OK24YSbk0eCx-';

    $timestamp = date("c", strtotime("now"));

    $json_data = json_encode([
    // Treść wiadomości (opcjonalne, można usunąć)
    "content" => "Nowa wiadomość z formularza!",

    // "Username" bota, który wysyła wiadomość
    "username" => "Formularz kontaktowy",

    // Avatar bota (opcjonalne, możesz wkleić link do logo)
    // "avatar_url" => "dist/img/logo.svg",

    // Główna treść wiadomości (w formie "Embed")
    "embeds" => [
        [
            "title" => "Nowe zapytanie od: " . $form_name,

            "color" => 5739594,

            // Pola wiadomości
            "fields" => [
                [
                    "name" => "Imię i Nazwisko",
                    "value" => $form_name,
                    "inline" => true
                ],
                [
                    "name" => "E-mail (do odpowiedzi)",
                    "value" => $form_email,
                    "inline" => true
                ],
                [
                    "name" => "Wiadomość",
                    "value" => $form_message,
                    "inline" => false
                ]
            ],

            // Stopka
            "footer" => [
                "text" => "Wysłano"
            ],
            "timestamp" => $timestamp
        ]
    ]

], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

$ch = curl_init($webhookURL);
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec($ch);
curl_close($ch);


    header('Location: index.html?status=sukces#contact');
    exit;
?>
