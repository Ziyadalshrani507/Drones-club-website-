from flask import Flask, render_template
import os

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/events')
def events():
    image_folder = 'static/eventimages/'
    text_folder = 'static/texts/'

    images = [f for f in os.listdir(image_folder) if f.endswith(('.jpg', '.jpeg', '.png'))]

    image_texts = {}
    image_titles = {}

    for image in images:
        image_name = image.split('.')[0]
        text_file_path = os.path.join(text_folder, f'{image_name}.txt')

        if os.path.exists(text_file_path):
            with open(text_file_path, 'r') as f:
                lines = f.readlines()
                image_titles[image] = lines[0].strip() if lines else "Untitled"
                image_texts[image] = ''.join(lines[1:]).strip() if len(lines) > 1 else ""
        else:
            image_titles[image] = "Untitled"
            image_texts[image] = ""

    return render_template('events.html', images=images, image_texts=image_texts, image_titles=image_titles)


@app.route('/team')
def team():
    return render_template('team.html')


if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True)
