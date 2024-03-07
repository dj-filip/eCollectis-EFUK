import subprocess
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

class ProcesPrintView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, pk, format=None):
        # php_server = subprocess.Popen(['php', '-S', 'localhost:8001', '-t', 'public'])
        endpoint = "http://localhost:8001/print/process/%s" % pk
        response = requests.get(endpoint)
        # php_server.kill()
        return Response({'output': response.text})