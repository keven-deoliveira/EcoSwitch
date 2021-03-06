# EcoSwitch Device Software
## Table of Contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#software-module-overview">Software Module Overview</a>
      <ul>
        <li><a href="#ecoswitch-temperature-algorithm">EcoSwitch Temperature Algorithm</a></li>
      </ul>
    </li>
    <li>
      <a href="#development-and-build-information">Development and Build Information</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#upload-script">Upload Script</a></li>
        <li><a href="#device-setup">Device Setup</a></li>
      </ul>
    </li>
  <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>

## About the Project
The EcoSwitch ESP32 code was designed to retrieve sensor data from the FCU and manage the temperature of the room via regulating the FCU temperature. This is done by running an algorithm to turn the FCU dial.  The original problem statement required the EcoSwitch device to detect temperature and humidity, and to be able to regulate the temperature based on that data. So, the ESP32 code was developed to meet that feature.

## Software Module Overview
Every aspect of the code of the ESP32 is stored on a single file. However the main part of the code that is used often is the Algorithm required to regulate the room temperature.
### EcoSwitch Temperature Algorithm
The algorithm takes the current temperature, a past temperature, the target temperature, a Boolean and the time since last running as inputs. 
The algorithm makes a slope based on the past temperature, current temperature and time. It will use this slope to calculate the predicted temperature.
Below is the formula that is used to predict the temperature:
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/images/EcoSwitch%20Prediction.png" width="300"/>
  </div>

With that predicted temperature, the algorithm will compare it to the target temperature after it compares the target temperature to the current temperature. Depending on the comparisons, the algorithm will either: increase the temperature setting by 1, decrease the temperature setting by 1 or keep the temperature setting the same.

## Dependencies Between Modules
Below is a flow chart depicting how the algorithm operates:
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/images/EcoSwitch%20Algorithm.png" width="650"/>
  </div>

## Development and Build Information
The program was developed with the following software:
* Arduino IDE v1.8.19

## Getting Started
### Prerequisites
You must install the ESP32 library in order to be able to program an ESP32 via Arduino IDE. Here is a tutorial that shows the exact process: [ESP32 Arduino IDE Tutorial](https://microcontrollerslab.com/install-esp32-arduino-ide/). You must also install the [AdaFruit DHT22 library](https://learn.adafruit.com/dht/using-a-dhtxx-sensor) to detect data from the DHT 22 sensor.

### Upload Script
Once the necessary libraries are installed, you can upload the ESP32 script that is provided in this repo. 
1. Navigate to `EcoSwitch/ESP32 Code/Ecoswitch_Dev/Ecoswitch_Dev.ino`. Double click on the file to open it up in Arduino IDE.
2. Once in Arduino IDE, connect the ESP32 to your computer.
3. After that upload the code to the ESP32 by clicking the "Upload" button.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/images/UploadScript.png" width="650"/>
  </div>

4. After the code has been uploaded, you can check if the code uploaded properly by opening the Serial Monitor to see if there is any output there.

### Device Setup
1. On the first boot, the device will want to know the WiFi credentials so that it can run. To do this, you must connect to the device via WiFi.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/images/ArduinoWifiConnect.png" width="350"/>
  </div>

2. Once connected, navigate to `192.168.1.1` to access the HTML form to input the WiFi credentials.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/images/WifiCredPage.png" width="650"/>
  </div>


3. Once the credentials are written, click the submit button and look at the Serial Monitor to see if the device is connected to the internet.
4. If the device is connected to the internet, You will be able to see messages in the Serial Monitor regarding the Temperature, Humidity, and Current State of the device.
<div align="center">
<img src="https://github.com/mharkess/EcoSwitch/blob/main/ESP32%20Code/images/EcoSwitchTerminal.png" width="650"/>
  </div>


#### Potential Errors
If the device is having trouble connecting to a WiFi network, make sure that it is 2.4 GHz. If connection issues still persist after a few tries, you may want to connect to a different network (like a hotspot or an entirely different WiFi network).

## Contact
If there are any further questions about the application project, please contact the lead developer via email.
* mharkess@bu.edu
