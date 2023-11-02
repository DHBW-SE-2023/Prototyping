# calculator.py
import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QPushButton, QLineEdit, QLabel

app = QApplication(sys.argv)
window = QMainWindow()
window.setGeometry(100, 100, 300, 200)
window.setWindowTitle('Taschenrechner')

def calculate():
    expression = input_field.text()
    try:
        result = eval(expression)
        result_label.setText(f'Ergebnis: {result}')
    except Exception as e:
        result_label.setText('Fehler: Ungültiger Ausdruck')

input_field = QLineEdit(window)
input_field.move(10, 10)
calculate_button = QPushButton('Berechnen', window)
calculate_button.move(10, 50)
calculate_button.clicked.connect(calculate)
result_label = QLabel('', window)
result_label.move(10, 90)

window.show()
sys.exit(app.exec_())
