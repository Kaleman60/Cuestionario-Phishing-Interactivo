const emails = [
    {
        from: "soporte@amaz0n-seguridad.com",
        to: "tu@email.com",
        subject: "Tu cuenta ha sido bloqueda - Acción requerida",
        body: `<p>Estimado cliente,</p>
        <p>Hemos detectado actividad sospechosa en su cuenta. Por razones de seguridad, hemos limitado temporalmente el acceso a su cuenta.</p>
        <p>Para restaurar el acceso, haga clic en el siguiente enlace:</p>
        <p><a href="#" class="suspicious-link">Restaurar mi cuenta</a></p>
        <p>Si no realiza esta acción en 24 horas, su cuenta será eliminada permanentemente.</p>
        <p>Atentamente,<br>Equipo de Seguridad Amazon</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> El remitente usa 'amaz0n-seguridad.com' (con cero en lugar de 'o') - los legítima empresas nunca usan dominios con errores de ortografía.",
                "<b>Urgencia falsa:</b> Amenaza con eliminar la cuenta en 24 horas para presionar decisiones apresuradas.",
                "<b>Enlace sospechoso:</b> El enlace no apunta a amazon.com oficial.",
                "<b>Saludo genérico:</b> Usa 'estimado cliente' en lugar de tu nombre real.",
                "<b> gramática:</b> Tiene errores de ortografía como 'bloqueda'."
            ]
        }
    },
    {
        from: "noreply@google.com",
        to: "tu@email.com",
        subject: "Tu archivo ha sido compartido contigo",
        body: `<p>Hola,</p>
        <p>Se ha compartido un documento de Google Docs contigo:</p>
        <p><b>Archivo:</b> Informe Trimestral 2024.docx</p>
        <p><b>Compartido por:</b> maria.garcia@empresa.com</p>
        <p><a href="https://docs.google.com/document/d/abc123">Abrir en Google Docs</a></p>
        <p>Este es un correo automático de Google. No respondas a este mensaje.</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio correcto:</b> noreply@google.com es un dominio oficial de Google.",
                "<b>Sin urgencia:</b> No amenaza ni presiona acciones inmediatas.",
                "<b>Enlace legítimo:</b> El enlace apunta a docs.google.com oficial.",
                "<b>Información específica:</b> Menciona un archivo concreto y un remitente identificable.",
                "<b>Sin solicitudes de datos:</b> No pide contraseñas ni información personal."
            ]
        }
    },
    {
        from: "servicio-tecnico@micros0ft-support.net",
        to: "tu@email.com",
        subject: "URGENTE: Su ordenador ha sido infectado",
        body: `<p>Estimado usuario de Windows,</p>
        <p>Nuestro sistema de seguridad ha detectado que su ordenador está infectado con virus peligrosos.</p>
        <p>SPYWARE.Trojan ha sido detectado en su sistema. Sus datos personales están en peligro.</p>
        <p>Llame inmediatamente al <b>1-800-555-0199</b> para una limpieza gratuita.</p>
        <p>O haga clic aquí para descargar el软件 de seguridad:</p>
        <p><a href="#" class="suspicious-link">Descargar herramienta de seguridad</a></p>
        <p>Este mensaje es automático. No ignore esta advertencia.</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> 'micros0ft-support.net' no es Microsoft oficial. El cero en lugar de 'o' es un error común.",
                "<b>Urgencia extrema:</b> Usa 'URGENTE' y lenguaje alarmista para generar pánico.",
                "<b> scareware:</b> Simula detectar virus para asustar y hacer llamar a números falsos de soporte.",
                "<b>Errores gramaticales:</b> Tiene texto en chino ('软件') mezclado.",
                "<b>Nunca Microsoftcontacta así:</b> Microsoft no envía correos no solicitados sobre infecciones."
            ]
        }
    },
    {
        from: "notificaciones@banco-santander.com",
        to: "carlos.martinez@gmail.com",
        subject: "Confirmación de transferencia realizada",
        body: `<p>Estimado Sr. Martinez,</p>
        <p>Le informamos que se ha realizado una transferencia desde su cuenta:</p>
        <p><b>Monto:</b> €1,250.00<br>
        <b>Destino:</b> ****4521<br>
        <b>Fecha:</b> 27/02/2026</p>
        <p>Si usted no realizó esta transferencia, contacte inmediatamente con nuestro servicio de atención al cliente.</p>
        <p><a href="https://www.bancosantander.es/particulares">Ir a Mi Banco Online</a></p>
        <p>Un saludo,<br>Banco Santander</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio fraudulento:</b> 'banco-santander.com' no es el dominio oficial (es 'santander.com').",
                "<b>Destinatario incorrecto:</b> Envía a un Gmail personal, no a un cliente bancario registrado.",
                "<b>Información vaga:</b> Solo muestra los últimos 4 dígitos, táctica para parecer legítimo.",
                "<b>Correo genérico:</b> 'Sr. Martinez' sin nombre completo conocido.",
                "<b>Los bancos legítimos:</b> Nunca incluyen enlaces directos en correos no solicitados."
            ]
        }
    },
    {
        from: "delivery@fedex.com",
        to: "tu@email.com",
        subject: "Tu paquete está esperando ser recogido",
        body: `<p>Hola,</p>
        <p>Tu paquete está listo para ser recogido en nuestra oficina.</p>
        <p><b>Número de seguimiento:</b> 789456123012</p>
        <p><b>Oficina:</b> FedEx Madrid Centro</p>
        <p><b>Horario:</b> Lu-Vi: 9:00-19:00</p>
        <p>Para más información sobre tu envío:</p>
        <p><a href="https://www.fedex.com/es-es/tracking.html">Rastrear paquete</a></p>
        <p>Gracias por elegir FedEx.</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio oficial:</b> fedex.com es el dominio legítimo de FedEx.",
                "<b>Sin solicitudes de información:</b> No pide datos personales ni contraseñas.",
                "<b>Información verificable:</b> Proporciona un número de seguimiento real.",
                "<b>Sin urgencia:</b> No amenaza ni presiona acciones inmediatas.",
                "<b>Enlace correcto:</b> Apunta a fedex.com oficial."
            ]
        }
    },
    {
        from: "paypal-seguridad@gmail.com",
        to: "tu@email.com",
        subject: "Tu cuenta ha sido limitada - Verifica tu identidad",
        body: `<p>Querido usuario de PayPal,</p>
        <p>Hemos limitado temporalmente tu cuenta debido a actividad inusual.</p>
        <p>Para recuperar el acceso completo, debes verificar tu identidad:</p>
        <p><a href="#" class="suspicious-link">Verificar mi cuenta ahora</a></p>
        <p>Hasta que verifiques tu identidad, no podrás:</p>
        <ul>
            <li>Enviar o recibir dinero</li>
            <li>Retirar fondos</li>
            <li>Agregar métodos de pago</li>
        </ul>
        <p>Por favor verifica dentro de 48 horas.</p>
        <p>PayPal Security Team</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Gmail como remitente:</b> PayPal NUNCA usa Gmail. Las empresas usan dominios propios.",
                "<b>Dominio falso:</b> 'paypal-seguridad@gmail.com' es completamente falso.",
                "<b>Urgencia falsa:</b> 48 horas para presionar decisiones rápidas.",
                "<b>Sin datos personales:</b> No menciona tu nombre ni últimos dígitos de cuenta.",
                "<b>Los enlaces reales:</b> PayPal nunca envía enlaces directos en correos, siempre让你 a su web oficial."
            ]
        }
    },
    {
        from: "noreply@netflix.com",
        to: "tu@email.com",
        subject: "Tu próximo plan de facturación",
        body: `<p>Hola,</p>
        <p>Tu próximo pago se procesará pronto:</p>
        <p><b>Monto:</b> €15.99<br>
        <b>Fecha de cargo:</b> 5 de marzo de 2026<br>
        <b>Plan:</b> Estándar</p>
        <p>Si deseas cambiar tu plan o cancelar, visita tu:</p>
        <p><a href="https://www.netflix.com/account">Página de cuenta</a></p>
        <p>Gracias por ser miembro de Netflix.</p>
        <p>Este es un correo automático. No responds a este mensaje.</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio oficial:</b> netflix.com es el dominio legítimo.",
                "<b>Sin urgencia:</b> Información de facturación simple y sin amenazas.",
                "<b>No pide datos:</b> No solicita contraseñas ni información personal.",
                "<b>Enlace correcto:</b> Apunta a netflix.com/account.",
                "<b>Sin acciones inmediatas:</b> Informa sin presionarclickar enlaces."
            ]
        }
    },
    {
        from: "apple-id@apple-support-verify.com",
        to: "tu@email.com",
        subject: "Tu Apple ID ha sido bloquedo por seguridad",
        body: `<p>Estimado cliente,</p>
        <p>Hemos detectado un intento de acceso no autorizado a su Apple ID desde:</p>
        <p><b>Ubicación:</b> Rusia<br>
        <b>Dispositivo:</b> iPhone 15 Pro<br>
        <b>IP:</b> 185.143.xxx.xxx</p>
        <p>Si no fuiste tú, verifica tu identidad inmediatamente:</p>
        <p><a href="#" class="suspicious-link">Verificar Apple ID</a></p>
        <p>Si no verificas en 12 horas, tu cuenta será suspendida.</p>
        <p>Apple Support Team</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> 'apple-support-verify.com' no es apple.com.",
                "<b>Errores ortográficos:</b> 'bloquedo' en lugar de 'bloqueado'.",
                "<b>Información vaga:</b> Muestra IP parcial para parecer legítima.",
                "<b>Urgencia extrema:</b> 12 horas para generar presión.",
                "<b>Apple no hace esto:</b> Apple NUNCA envía correos alertando de accesos no autorizados así."
            ]
        }
    },
    {
        from: "rrhh@tu-empresa.com",
        to: "tu@email.com",
        subject: "Recordatorio: Encuesta de satisfacción laboral",
        body: `<p>Hola,</p>
        <p>Este es un recordatorio de que la encuesta de satisfacción laboral del Q1 2026 sigue disponible.</p>
        <p>Tu opinión es importante para mejorar nuestro entorno de trabajo.</p>
        <p>Tienes hasta el 15 de marzo para completarla.</p>
        <p><a href="https://encuestas.tu-empresa.com/q1-2026">Completar encuesta</a></p>
        <p>Gracias por tu participación.</p>
        <p>Departamento de RRHH</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio corporativo:</b> 'tu-empresa.com' parece un dominio corporativo real.",
                "<b>Sin urgencia:</b> Recordatorio cordial sin amenazas.",
                "<b>No solicita datos sensibles:</b> Solo pide completar una encuesta.",
                "<b>Información apropiada:</b> Nombre del departamento y contexto verosímil.",
                "<b>Plazo razonable:</b> 15 de marzo es una fecha apropiada."
            ]
        }
    },
    {
        from: "instagram-verification@mail-instagram.com",
        to: "tu@email.com",
        subject: "¡Tu cuenta ha sido seleccionada para verificación!",
        body: `<p>¡Felicitaciones!</p>
        <p>Tu cuenta de Instagram ha sido seleccionada para obtener la verificación azul.</p>
        <p>Para completar el proceso, necesitas:</p>
        <ol>
            <li>Tu nombre de usuario y contraseña</li>
            <li>Número de teléfono</li>
            <li>Una selfie con tu ID</li>
        </ol>
        <p><a href="#" class="suspicious-link">Obtener verificación</a></p>
        <p>¡Solo 100 cuentas serán verificadas!</p>
        <p>Equipo de Instagram</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> 'mail-instagram.com' no es el dominio oficial de Instagram (instagram.com).",
                "<b>NUNCA piden contraseñas:</b> Instagram NUNCA solicita contraseñas por correo.",
                "<b>NUNCA piden ID:</b> El proceso de verificación real NO requiere selfies con ID.",
                "<b>Escasez falsa:</b> 'Solo 100 cuentas' para crear urgencia artificial.",
                "<b>La verificación real:</b> Se gestiona desde la app, nunca por correo electrónico."
            ]
        }
    },
    {
        from: "cuenta@netflix-billing.xyz",
        to: "tu@email.com",
        subject: "Actualiza tu método de pago - Netflix",
        body: `<p>Estimado miembro de Netflix,</p>
        <p>No pudimos procesar el pago de tu suscripción. Tu servicio será suspendido en 48 horas.</p>
        <p>Por favor, actualiza tus datos de pago inmediatamente:</p>
        <p><a href="#" class="suspicious-link">https://netflix-billing.xyz/update-payment</a></p>
        <p>Tarjeta aceptada: Visa, Mastercard, AMEX</p>
        <p>Ingresa tu número de tarjeta, fecha de vencimiento y CVV para continuar.</p>
        <p>Netflix</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> 'netflix-billing.xyz' no es netflix.com",
                "<b>Solicita datos de tarjeta:</b> Pide CVV y datos completos de tarjeta directamente",
                "<b>Urgencia:</b> '48 horas' para presionar acción inmediata",
                "<b>Netflix nunca:</b> Pide datos de pago via email",
                "<b>Dominio sospechoso:</b> .xyz no es usado por Netflix"
            ]
        }
    },
    {
        from: "security@google.com",
        to: "tu@email.com",
        subject: "Notificación de seguridad: Inicio de sesión desde nuevo dispositivo",
        body: `<p>Hola,</p>
        <p>Se detectó un nuevo inicio de sesión en tu cuenta de Google:</p>
        <ul>
            <li><strong>Dispositivo:</strong> Windows - Chrome</li>
            <li><strong>Ubicación:</strong> Madrid, España</li>
            <li><strong>Fecha:</strong> 27 de febrero de 2026, 07:45</li>
        </ul>
        <p>Si no fuiste tú, cambia tu contraseña desde <a href="#">myaccount.google.com</a></p>
        <p>Este es un mensaje automático. No respondas a este correo.</p>
        <p>Equipo de Seguridad de Google</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio correcto:</b> google.com (oficial)",
                "<b>Información verificable:</b> Proporciona dispositivo y ubicación",
                "<b>No pide hacer clic:</b> Indica cómo cambiar contraseña desde su web oficial",
                "<b>No solicita datos:</b> No pide contraseñas ni información personal",
                "<b>Mensaje automático:</b> Indica que es automático"
            ]
        }
    },
    {
        from: "soporte@bancopopular-alert.com",
        to: "tu@email.com",
        subject: "Verifica tu identidad - Solicitud de transferencia",
        body: `<p>Estimado cliente,</p>
        <p>Se ha solicitado una transferencia de 2.500€ desde tu cuenta.</p>
        <p>Detalles:</p>
        <ul>
            <li><strong>Destinatario:</strong> Juan García</li>
            <li><strong>IBAN:</strong> ES12 3456 7890 1234 5678 9012</li>
        </ul>
        <p>¿No fuiste tú? Confirma tu identidad inmediatamente:</p>
        <p><a href="#" class="suspicious-link">https://bancopopular-alert.com/verify</a></p>
        <p>Si no respondes en 1 hora, autorizamos la transferencia.</p>
        <p>Banco Popular - Seguridad</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Banco Popular NO existe:</b> Fue absorbido por Unicaja",
                "<b>Dominio falso:</b> 'bancopopular-alert.com' no es oficial",
                "<b>Urgencia extrema:</b> '1 hora' para impedir reflexión",
                "<b>Bancos nunca:</b> Piden verificación via email",
                "<b>Enlace externo:</b> Solicita confirmar identidad fuera del banco"
            ]
        }
    },
    {
        from: "service@paypa1-security.com",
        to: "tu@email.com",
        subject: "Tu código de verificación de PayPal",
        body: `<p>Estimado usuario,</p>
        <p>Se ha solicitado un código de verificación para tu cuenta PayPal.</p>
        <p><strong>Código: 482916</strong></p>
        <p>Si no fuiste tú, haz clic aquí para asegurar tu cuenta:</p>
        <p><a href="#" class="suspicious-link">https://paypa1-security.com/verify-code</a></p>
        <p>Este código expira en 10 minutos.</p>
        <p>PayPal Security Team</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> 'paypa1-security.com' usa número 1 en lugar de 'i'",
                "<b>Solicita verificar via enlace:</b> PayPal nunca hace esto",
                "<b>Urgencia:</b> 'expira en 10 minutos'",
                "<b>PayPal no envía así:</b> Códigos via email con enlaces",
                "<b>El dominio:</b> No es paypal.com"
            ]
        }
    },
    {
        from: "noreply@spotify.com",
        to: "tu@email.com",
        subject: "Tu factura de Spotify - Febrero 2026",
        body: `<p>Hola,</p>
        <p>Tu recibo de Spotify Premium:</p>
        <ul>
            <li><strong>Plan:</strong> Premium Individual</li>
            <li><strong>Período:</strong> 26 ene - 26 feb 2026</li>
            <li><strong>Importe:</strong> 10,99 €</li>
        </ul>
        <p>Tu próximo cargo: 26 de marzo de 2026</p>
        <p>Gestiona tu suscripción en <a href="#">spotify.com/account</a></p>
        <p>Gracias por escuchar,<br>Spotify</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio correcto:</b> spotify.com (oficial)",
                "<b>Información de facturación:</b> Específica y coherente",
                "<b>No pide datos:</b> No incluye enlaces sospechosos",
                "<b>Diseño coherente:</b> Con comunicaciones de Spotify"
            ]
        }
    },
    {
        from: "atencion@agencia-tributaria.gob.es",
        to: "tu@email.com",
        subject: "Tu impuestos - Aviso de la Agencia Tributaria",
        body: `<p>Estimado contribuyente,</p>
        <p>Hemos detectado irregularidades en tu declaración de la renta.</p>
        <p>Tienes un saldo pendiente de 1.250€.</p>
        <p>Para evitar sanciones, regulariza tu situación:</p>
        <p><a href="#" class="suspicious-link">https://agencia-tributaria.gob.es/pago-inmediato</a></p>
        <p>Tienes 5 días naturales para responder.</p>
        <p>Agencia Tributaria</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>La Agencia Tributaria NO:</b> Comunica pagos via email así",
                "<b>Dominio correcto:</b> Seria sede.agenciatributaria.gob.es",
                "<b>Urgencia injustificada:</b> '5 días'",
                "<b>No piden pagos:</b> Via enlace externo",
                "<b>La Agencia usa:</b> Certificado digital y sede electrónica"
            ]
        }
    },
    {
        from: "no-reply@outlook.com",
        to: "tu@email.com",
        subject: "Alerta de seguridad: Tu contraseña expira mañana",
        body: `<p>Hola,</p>
        <p>Tu contraseña de Microsoft expirará mañana.</p>
        <p>Detalles:</p>
        <ul>
            <li><strong>Cuenta:</strong> tu@correo.com</li>
            <li><strong>Caducidad:</strong> 27 de febrero de 2026</li>
        </ul>
        <p>Para cambiar tu contraseña, usa la configuración de tu dispositivo o visita <a href="#">account.microsoft.com</a></p>
        <p>Si no quieres cambiarla, ignora este mensaje.</p>
        <p>Equipo de Microsoft</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio correcto:</b> outlook.com (oficial de Microsoft)",
                "<b>No incluye enlaces:</b> Directos a cambio de contraseña",
                "<b>Indica cómo:</b> Cambiar contraseña de forma segura",
                "<b>Mensaje neutral:</b> Dice 'ignora este mensaje'"
            ]
        }
    },
    {
        from: "delivery@dhl-express-delivery.info",
        to: "tu@email.com",
        subject: "Tu paquete no pudo ser entregado - DHL",
        body: `<p>Estimado cliente,</p>
        <p>Tu paquete no pudo ser entregado debido a información de dirección incompleta.</p>
        <p>Número de envío: DHL-8273645</p>
        <p>Por favor, confirma tus datos de entrega:</p>
        <p><a href="#" class="suspicious-link">https://dhl-express-delivery.info/redelivery</a></p>
        <p>De lo contrario, tu paquete será devuelto al remitente en 3 días.</p>
        <p>DHL Express</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>Dominio falso:</b> 'dhl-express-delivery.info' no es dhl.com",
                "<b>Urgencia:</b> '3 días' para presionar",
                "<b>DHL nunca:</b> Pide datos via enlaces externos",
                "<b>Errores en dominio:</b> Nombre demasiado largo y sospechoso"
            ]
        }
    },
    {
        from: "notificaciones@correos.es",
        to: "tu@email.com",
        subject: "Paquete disponible para entrega - Correos",
        body: `<p>Hola,</p>
        <p>Tienes un paquete esperando ser entregado.</p>
        <ul>
            <li><strong>Número de seguimiento:</strong> ES1234567890XX</li>
            <li><strong>Estado:</strong> Disponible en oficina</li>
            <li><strong>Oficina:</strong> Oficina principal - Madrid</li>
        </ul>
        <p>Consulta el estado en <a href="#">correos.es/seguimiento</a></p>
        <p>Gracias,<br>Correos</p>`,
        isPhishing: false,
        explanation: {
            title: "CORREO LEGÍTIMO",
            points: [
                "<b>Dominio correcto:</b> correos.es",
                "<b>Información verificable:</b> De envío",
                "<b>No pide datos:</b> Personales adicionales",
                "<b>Formato coherente:</b> Con Correos"
            ]
        }
    },
    {
        from: "support@whatsapp-help.net",
        to: "tu@email.com",
        subject: "URGENTE: Tu cuenta de WhatsApp será eliminada",
        body: `<p>¡ATENCIÓN!</p>
        <p>Tu cuenta de WhatsApp será eliminada en 24 horas por inactividad.</p>
        <p>Para evitar perder tu cuenta, verifica tu número:</p>
        <p><a href="#" class="suspicious-link">https://whatsapp-help.net/verify/34XXXXXXX</a></p>
        <p>Código de verificación: 567891</p>
        <p>WhatsApp Support Team</p>`,
        isPhishing: true,
        explanation: {
            title: "CORREO DE PHISHING",
            points: [
                "<b>WhatsApp nunca:</b> Envía emails así",
                "<b>Dominio falso:</b> No es whatsapp.com",
                "<b>Urgencia falsa:</b> '24 horas'",
                "<b>No verifica así:</b> Cuentas via email",
                "<b>Phishing:</b> Solicita código de verificación"
            ]
        }
    }
];

let currentIndex = 0;
let score = 0;
let answers = [];
let shuffledEmails = [];

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initQuiz() {
    shuffledEmails = shuffleArray(emails);
    currentIndex = 0;
    score = 0;
    answers = [];
    document.getElementById('total-num').textContent = shuffledEmails.length;
    document.getElementById('final-total').textContent = shuffledEmails.length;
    showEmail();
}

function showEmail() {
    const email = shuffledEmails[currentIndex];
    
    document.getElementById('email-from').textContent = email.from;
    document.getElementById('email-to').textContent = email.to;
    document.getElementById('email-subject').textContent = email.subject;
    document.getElementById('email-body').innerHTML = email.body;
    
    document.getElementById('current-num').textContent = currentIndex + 1;
    document.getElementById('progress').style.width = ((currentIndex) / shuffledEmails.length * 100) + '%';
    
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('feedback-container').classList.add('hidden');
    document.getElementById('results-container').classList.add('hidden');
    
    updateScore();
}

function answer(userSaidPhishing) {
    const email = shuffledEmails[currentIndex];
    const isCorrect = userSaidPhishing === email.isPhishing;
    
    if (isCorrect) {
        score++;
    }
    
    answers.push({
        email: email,
        userAnswer: userSaidPhishing,
        correct: isCorrect
    });
    
    showFeedback(email, isCorrect);
}

function showFeedback(email, isCorrect) {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('feedback-container').classList.remove('hidden');
    
    const feedbackEl = document.getElementById('feedback');
    feedbackEl.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
    
    const resultText = isCorrect ? '✓ ¡Correcto!' : '✗ Incorrecto';
    const expectedText = email.isPhishing ? 'Era PHISHING' : 'Era LEGÍTIMO';
    
    let pointsHtml = '<div class="feedback-points"><ul>';
    email.explanation.points.forEach(point => {
        pointsHtml += '<li>' + point + '</li>';
    });
    pointsHtml += '</ul></div>';
    
    feedbackEl.innerHTML = `
        <h3>${resultText}</h3>
        <p><b>${expectedText}</b></p>
        ${pointsHtml}
    `;
    
    updateScore();
}

function updateScore() {
    document.getElementById('score').textContent = score;
    document.getElementById('score-total').textContent = answers.length;
}

function nextEmail() {
    currentIndex++;
    
    if (currentIndex >= shuffledEmails.length) {
        showResults();
    } else {
        showEmail();
    }
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('feedback-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    document.getElementById('final-score').textContent = score;
    
    const percentage = (score / shuffledEmails.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = '¡Excelente! Eres un experto detectando phishing. Tu nivel de alerta es muy alto.';
    } else if (percentage >= 70) {
        message = '¡Muy bien! Tienes buenos conocimientos, pero todavía puedes mejorar.';
    } else if (percentage >= 50) {
        message = 'Regular. Necesitas practicar más para identificar correos fraudulentos.';
    } else {
        message = '¡Cuidado! Tu nivel de seguridad es bajo. Estudia más los indicadores de phishing.';
    }
    
    document.getElementById('result-message').textContent = message;
    
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    answers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = 'review-item ' + (answer.correct ? 'correct' : 'incorrect');
        item.innerHTML = `
            <span class="icon">${answer.correct ? '✓' : '✗'}</span>
            <span><b>Correo ${index + 1}:</b> ${answer.email.isPhishing ? 'Phishing' : 'Legítimo'}</span>
        `;
        reviewList.appendChild(item);
    });
}

function restartQuiz() {
    initQuiz();
}

document.addEventListener('DOMContentLoaded', initQuiz);
