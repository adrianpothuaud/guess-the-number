/*
	This is the Geb configuration file.
	
	See: http://www.gebish.org/manual/current/configuration.html
*/


import io.github.bonigarcia.wdm.WebDriverManager
import org.openqa.selenium.chrome.ChromeDriver

driver = {
    WebDriverManager.chromedriver().setup()
    new ChromeDriver()
}

baseUrl = "https://adrianpothuaud.github.io/guess-the-number/"
