<?php
// Configuración de cabeceras para permitir que React se comunique con PHP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Recibir los datos JSON enviados desde el formulario de React
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Verificar si llegaron datos
if ($data) {
    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $phone = isset($data['phone']) ? filter_var($data['phone'], FILTER_SANITIZE_STRING) : 'No indicado';
    $service = isset($data['serviceName']) ? filter_var($data['serviceName'], FILTER_SANITIZE_STRING) : 'General';

    // ---------------------------------------------------------
    // CONFIGURACIÓN IMPORTANTE: PON TUS DATOS AQUÍ
    // ---------------------------------------------------------
    
    // 1. ¿A dónde quieres que lleguen los correos?
    $to = "limpiavlc1@gmail.com"; 

    // 2. Asunto del correo que recibirás
    $subject = "Nueva Cotización Web: " . $name;

    // 3. Cuerpo del mensaje
    $message = "Has recibido una nueva solicitud desde tu sitio web:\n\n";
    $message .= "----------------------------------\n";
    $message .= "Nombre: " . $name . "\n";
    $message .= "Email: " . $email . "\n";
    $message .= "Teléfono: " . $phone . "\n";
    $message .= "Plan/Servicio Interesado: " . $service . "\n";
    $message .= "----------------------------------\n";

    // 4. Cabeceras del correo
    $headers = "From: noreply@tudominio.com" . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Intentar enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "Correo enviado correctamente"]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "message" => "Error al enviar el correo"]);
    }

} else {
    echo json_encode(["success" => false, "message" => "No se recibieron datos"]);
}
?>