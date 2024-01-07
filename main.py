import flet as flet
from flet import (UserControl, canvas, Paint, PaintingStyle, Theme, colors, Page, Container, border,border_radius, margin, ResponsiveRow, Column, TextField, alignment, TextAlign, MainAxisAlignment, CrossAxisAlignment, TextStyle, FontWeight)
from time import sleep 
import threading
from datetime import datetime
from math import pi

def main(page: Page):
    page.horizontal_alignment=CrossAxisAlignment.CENTER
    page.scroll="AUTO"
    page.bgcolor = "#DD000000"
    page.fonts = {
        "UbuntuMonoRegular": "/fonts/UbuntuMono-Regular.ttf",
        "UbuntuMonoBold": "/fonts/UbuntuMono-Bold.ttf",
        "Rubik_Mono_One": "/fonts/Rubik_Mono_One/RubikMonoOne-Regular.ttf",
        "LCDMono": "/fonts/LCDMU___.TTF"
    }
    page.theme = Theme(font_family="UbuntuMonoRegular")
    # current time
    now = datetime.now()

    # clockContainer
    if (page.height > page.width):
        clockContainerWidth = page.width * 0.9
    else:
        clockContainerWidth = page.height * 0.9
    clockContainerHeight = clockContainerWidth
    clockContainerMargin = margin.only(left=0,top=(page.height/15),right=0,bottom=0)
    clockContainerPadding = 10
    clockContainerBGColor = "#22D96A29"
    clockContainerBorderWidth = 5
    if (page.height > page.width):
        cornerRadius = 150
    else:
        cornerRadius = 300
    clockContainerBorderRadius = border_radius.only(
        top_left=cornerRadius,
        top_right=50, 
        bottom_left=50, 
        bottom_right=cornerRadius
    )
    clockContainerBorderColor = "#BB8C1A0F"
    clockContainerBorder = border.all(clockContainerBorderWidth,clockContainerBorderColor)
    # clockTimeArc
    clockTimeArcStrokeWidth = 6
    clockTimeArcStrokeColor = "#BBD96A29"
    clockTimeArcCanvasXValue = (clockTimeArcStrokeWidth / 2) + (clockContainerPadding) - (clockContainerBorderWidth/2)
    clockTimeArcCanvasYValue = clockTimeArcCanvasXValue
    clockTimeArcCanvasHeight = clockContainerHeight - (4*clockContainerPadding) - (clockTimeArcStrokeWidth/2)
    clockTimeArcCanvasWidth = clockTimeArcCanvasHeight
    # clockTimeText
    clockTimeTextXValue = clockTimeArcCanvasWidth / 4.3
    clockTimeTextYValue = clockTimeArcCanvasHeight / 3.4
    clockTimeTextSize = clockTimeArcCanvasHeight / 7
    clockTimeTextColor = "#CCEAD7A5"
    clockTimeTextBGColor = "#22000000"
    clockTimeTextWeight = FontWeight.W_400
    clockTimeTextFontFamily = "LCDMono"
    # clockDateText
    clockDateTextXValue = clockTimeArcCanvasWidth / 2.49
    clockDateTextYValue = clockTimeArcCanvasHeight / 2.1
    clockDateTextSize = clockTimeTextSize / 3
    clockDateTextColor = clockTimeTextColor
    clockDateTextBGColor = clockTimeTextBGColor
    clockDateTextWeight = FontWeight.W_400
    clockDateTextFontFamily = "LCDMono"

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
                        weight=clockTimeTextWeight,
                        bgcolor=clockTimeTextBGColor,
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
                        weight=clockDateTextWeight,
                        bgcolor=clockDateTextBGColor,
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
        border=clockContainerBorder,
        bgcolor=clockContainerBGColor,
        width=clockContainerWidth,
        height=clockContainerHeight,
        margin=clockContainerMargin,
        padding=clockContainerPadding,
        border_radius=clockContainerBorderRadius,
    )
    pageLayout = Column(
        controls=[
            clockContainer
        ],
        horizontal_alignment=MainAxisAlignment,
        alignment=CrossAxisAlignment,
    )

    page.add(
        pageLayout,
    )

flet.app(target=main)