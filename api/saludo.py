from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Configuramos la respuesta como exitosa (200) y de tipo JSON
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        
        # Este es el diccionario de datos que enviaremos al frontend
        respuesta = {
            "mensaje": "¡Conexión exitosa! Este texto fue generado por un script de Python ejecutándose en Vercel.",
            "estado": "ok"
        }
        
        # Convertimos el diccionario a JSON y lo enviamos
        self.wfile.write(json.dumps(respuesta).encode('utf-8'))
        return
