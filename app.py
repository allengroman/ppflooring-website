from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Mount the assets folder for serving static files
app.mount("/assets", StaticFiles(directory="website/dist/assets"), name="assets")

# Serve the static HTML file for specific routes
@app.get("/")
async def serve_html():
    file_path = "website/dist/index.html"
    if os.path.exists(file_path):
        return FileResponse(file_path, media_type="text/html")
    return {"message": "File not found"}

@app.get("/{url}")
async def serve_html(url: str):
    file_path = "website/dist/index.html"
    # Check if the URL matches one of the allowed paths
    if url == "about" or url == "services" or url == "contact":
        if os.path.exists(file_path):
            return FileResponse(file_path, media_type="text/html")
    return {"message": "File not found"}


