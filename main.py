import flet as flet
from flet import (UserControl, canvas, Paint, PaintingStyle, colors, Page, Container, Row, TextField, alignment, TextAlign, MainAxisAlignment, CrossAxisAlignment, TextStyle, FontWeight)
from time import sleep 
import threading
from datetime import datetime
from math import pi

# current time
now = datetime.now()

# clockContainer
clockContainerHeight = 700
clockContainerWidth = clockContainerHeight
clockContainerMargin = 0
clockContainerPadding = 10
clockContainerBGColor = colors.GREY_900
# clockTimeArc
clockTimeArcStrokeWidth = 6
clockTimeArcStrokeColor = colors.AMBER_500
clockTimeArcCanvasXValue = 0 + (clockTimeArcStrokeWidth / 2)
clockTimeArcCanvasYValue = clockTimeArcCanvasXValue
clockTimeArcCanvasHeight = clockContainerHeight - (clockContainerPadding * 2) - (clockTimeArcStrokeWidth)
clockTimeArcCanvasWidth = clockTimeArcCanvasHeight
# clockTimeText
clockTimeTextXValue = clockTimeArcCanvasWidth / 6
clockTimeTextYValue = clockTimeArcCanvasHeight / 3.4
clockTimeTextSize = clockTimeArcCanvasHeight / 7
clockTimeTextColor = colors.ORANGE_400
clockTimeTextWeight = FontWeight.W_700
clockTimeTextFontFamily = "Open Sans"
# clockDateText
clockDateTextXValue = clockTimeArcCanvasWidth / 2.6
clockDateTextYValue = clockTimeArcCanvasHeight / 2.3
clockDateTextSize = clockTimeTextSize / 3
clockDateTextColor = colors.ORANGE_800
clockDateTextWeight = FontWeight.W_400
clockDateTextFontFamily = clockTimeTextFontFamily


class Clock(UserControl):
    def __init__(self, currentTime):
        super().__init__()
        self.currentTime = currentTime

    def did_mount(self):
        self.running = True
        self.th = threading.Thread(target=self.update_timer, args=(), daemon=True)
        self.th.start()

    def will_unmount(self):
        self.running = False

    def update_timer(self):
        while self.currentTime and self.running:
            self.now = datetime.now()
            self.currentTime = self.now
            self.year = self.currentTime.strftime("%Y")
            self.monthNumber = self.currentTime.strftime("%m")
            self.monthName = self.currentTime.strftime("%b")
            self.week = self.currentTime.strftime("%W")
            self.dayNumber = self.currentTime.strftime("%d")
            self.dayName = self.currentTime.strftime("%a")
            self.hour = self.currentTime.strftime("%H")
            self.minute = self.currentTime.strftime("%M")
            self.second = self.currentTime.strftime("%S")
            self.timeRecap = f"{self.year}-{self.monthNumber}-{self.dayNumber}-({self.week})_{self.hour}:{self.minute}:{self.second}"
            self.timeTextValue = f"{self.hour}:{self.minute}:{self.second}"
            self.dateTextValue = f"{self.dayName} {self.dayNumber} {self.monthName}"
            self.secondsRatio = int(self.second) / 60
            self.minutesRatio = (self.secondsRatio + int(self.minute)) / 60
            self.hoursRatio = (self.minutesRatio + int(self.hour)) / 24
            self.secondsAngle = (self.secondsRatio * 360) * pi / 180
            self.minutesAngle = (self.minutesRatio * 360) * pi / 180
            self.hoursAngle = (self.hoursRatio * 360) * pi / 180
            self.clockHandAngle = 1 * self.hoursAngle
            self.clockComponent.shapes.clear()
            clockTimeArc = canvas.Arc(
                x=clockTimeArcCanvasXValue,
                y=clockTimeArcCanvasYValue,
                height=clockTimeArcCanvasHeight,
                width=clockTimeArcCanvasWidth,
                start_angle=3*pi/2,
                sweep_angle=self.clockHandAngle,
                use_center=False,
                paint=Paint(
                    style=PaintingStyle.STROKE,
                    stroke_width=clockTimeArcStrokeWidth,
                    color=clockTimeArcStrokeColor,
                ),
            )
            clockTimeText = canvas.Text(
                x=clockTimeTextXValue,
                y=clockTimeTextYValue,
                text=self.timeTextValue,
                style=TextStyle(
                    font_family=clockTimeTextFontFamily,
                    size=clockTimeTextSize,
                    color=clockTimeTextColor,
                    weight=clockTimeTextWeight
                ),
            )
            clockDateText = canvas.Text(
                x=clockDateTextXValue,
                y=clockDateTextYValue,
                text=self.dateTextValue,
                style=TextStyle(
                    font_family=clockDateTextFontFamily,
                    size=clockDateTextSize,
                    color=clockDateTextColor,
                    weight=clockDateTextWeight
                ),
            )
            self.clockComponent.shapes.append(
                clockTimeArc
            )
            self.clockComponent.shapes.append(
                clockTimeText
            )
            self.clockComponent.shapes.append(
                clockDateText
            )
            self.update()
            sleep(1)

    def build(self):
        self.clockComponent = canvas.Canvas()
        return self.clockComponent

clockContainer = Container(
    content=Clock(now),
    # alignment=alignment.center,
    bgcolor=clockContainerBGColor,
    width=clockContainerWidth,
    height=clockContainerHeight,
    margin=clockContainerMargin,
    padding=clockContainerPadding,
)

def main(page: Page):
    page.fonts = {
        "Kanit": "https://raw.githubusercontent.com/google/fonts/master/ofl/kanit/Kanit-Bold.ttf",
        "Open Sans": "/fonts/OpenSans-Regular.ttf"
    }
    page.add(
        clockContainer
    )

flet.app(target=main)