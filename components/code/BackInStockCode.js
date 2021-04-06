const BREW = `$ brew update
$ brew install docker
$ brew install docker-machine`;

const CLONE = `$ cd ~/workspace
$ git clone git@github.com:jianajavier/back_in_stock.git`;

const CONSTANTS = `TO_EMAIL = 'youremail@gmail.com' # Replace between quotes with your email address
FROM_EMAIL = 'yournamescripts@gmail.com' # Replace between quotes with new email address from Step 1
APP_PASSWORD = 'password' # Replace between quotes with the app password you generated in Step 1`;

const BUILD_CONTAINER = `$ cd ~/workspace/back_in_stock
$ docker build -t back_in_stock .`

const RUN_CONTAINER = `$ docker run -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock`

const PLIST = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>local.back_in_stock</string>
    <key>ProgramArguments</key>
    <array>
        <string>/usr/local/bin/docker</string>
        <string>run</string>
        <string>-v</string>
        <string>/your/absolute/path/back_in_stock:/back_in_stock</string>
        <string>back_in_stock</string>
    </array>
    <key>WorkingDirectory</key>
    <string>/your/absolute/path/back_in_stock</string>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Hour</key>
        <integer>22</integer>
        <key>Minute</key>
        <integer>24</integer>
    </dict>
    <key>StandardErrorPath</key>
    <string>/your/absolute/path/back_in_stock/logs/back_in_stock.err</string>
    <key>StandardOutPath</key>
    <string>/your/absolute/path/back_in_stock/logs/back_in_stock.out</string>
</dict>
</plist>`

const LAUNCH_CTL = `$ launchctl load -w /Library/LaunchDaemons/$(ls /Library/LaunchDaemons/ | grep back_in_stock)'`

const LAUNCH_ALIAS = `$ alias reload_back_in_stock='launchctl unload -w /Library/LaunchDaemons/$(ls /Library/LaunchDaemons/ | grep back_in_stock) && launchctl load -w /Library/LaunchDaemons/$(ls /Library/LaunchDaemons/ | grep back_in_stock)'
$ reload_back_in_stock`

const XML_TIME = `<dict>
    <key>Hour</key>
    <integer>21</integer>
    <key>Minute</key>
    <integer>03</integer>
</dict>`

const LINK_IN_FILE = `$ cd ~/workspace/back_in_stock
$ echo 'https://shop.lululemon.com/p/women-pants/Align-Pant-Tall/_/prod9410008?color=26083&sz=4' >> lululemon.txt`

const ADD_METHOD = `TODAYS_DATE = datetime.today().strftime('%Y-%m-%d')
SCREENSHOT_NAME = "back_in_stock_screenshot_%s.png" % TODAYS_DATE

# This is the everlane method
def everlane(driver):
    f = open("everlane.txt", "r")
    ### ...

# Our new lululemon method
def lululemon(driver):
    f = open("lululemon.txt", "r")      # This gets the text file
    for link in f:                      # Loop through each link in the text file (we are starting with one)
          link = link.strip("\n")        # Remove the new line character at the end of each line
        driver.get(link)                 # Use the selenium web driver to get the link`

const BUTTON_HTML = `<button class="button-1xp0M lll-text-button add-to-bag buttonPrimary-2q4bX" type="button" data-lulu-track="pdp-add-to-bag-regular-enabled">Add to Bag</button>`

const BUTTON_CLASSES = `button-1xp0M lll-text-button add-to-bag buttonPrimary-2q4bX`

const SEL_FIND_BY = `find_element_by_class_name('add-to-bag')`

const NEW_LULU = `# Our new lululemon method
def lululemon(driver):
    f = open("lululemon.txt", "r")
    for link in f:
          link = link.strip("\n")
        driver.get(link)

        try:
            add_button = driver.find_element_by_class_name('add-to-bag') # Find by class name
        except NoSuchElementException: # Error handling 
            pass`

const CHECK_ADD_ENABLED = `def lululemon(driver):
    f = open("lululemon.txt", "r")
    for link in f:
          link = link.strip("\n")
        driver.get(link)

        try:
            add_button = driver.find_element_by_class_name('add-to-bag')

            if add_button.is_enabled(): # Check if enabled
                # This is where we will want to save a screenshot and email ourselves

        except NoSuchElementException:
            pass`

const EMAIL_IF_ENABLED = `def lululemon(driver):
    f = open("lululemon.txt", "r")
    for link in f:
          link = link.strip("\n")
        driver.get(link)

        try:
            add_button = driver.find_element_by_class_name('add-to-bag')

            if add_button.is_enabled():
              save_screenshot(driver, SCREENSHOT_NAME)
              send_email(prepare_email(link))

        except NoSuchElementException:
            pass`

const CALL_IN_MAIN = `def main(debug):
    driver = initialize_driver(debug)
    everlane(driver)
    lululemon(driver)`

const TEST_CODE = `def lululemon(driver):
    f = open("lululemon.txt", "r")
    for link in f:
          link = link.strip("\n")
        driver.get(link)

        try:
            add_button = driver.find_element_by_class_name('add-to-bag')

            if not add_button.is_enabled(): # Change to not for testing
              save_screenshot(driver, SCREENSHOT_NAME)
              send_email(prepare_email(link))

        except NoSuchElementException:
            pass`

const RUN_CODE = `$ docker run -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock`

const CREATE_SKIMS = `$ cd ~/workspace/back_in_stock
$ echo 'https://skims.com/products/cozy-knit-robe-stone' >> skims.txt`

const NEW_SKIMS_METHOD = `TODAYS_DATE = datetime.today().strftime('%Y-%m-%d')
SCREENSHOT_NAME = "back_in_stock_screenshot_%s.png" % TODAYS_DATE

# This is the everlane method
def everlane(driver):
    f = open("everlane.txt", "r")
    ### ...

# Our new skims method
def skims(driver):
    f = open("skims.txt", "r")                           # This gets the text file
    for link in f:                                                  # Loop through each link in the text file
          link = link.strip("\n")                            # Remove the new line character at the end of each line
        driver.get(link)                                      # Use the selenium web driver to get the link`

const CALL_NEW_SKIMS = `def main(debug):
    driver = initialize_driver(debug)
    everlane(driver)
    lululemon(driver)
    skims(driver)`

const FIND_ELEM_BY_XPATH = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button = driver.find_element_by_xpath("") # Add this line`

const FILL_XPATH = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button = driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")`

const SKIMS_METHOD_EDIT = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()
        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const SKIMS_CLICK_COLOR_BUTTON = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()

            size_select = driver.find_element_by_id('Option1')
            size_select.click()

            save_screenshot(driver, SCREENSHOT_NAME)
        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const RUN_SKIMS = `$ docker run -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock`

const OPTION_NIS = `<option class="" value="L/XL">L/XL - Waitlist</option>`

const SKIMS_XPATH = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()

            size_select = driver.find_element_by_id('Option1')
            size_select.click()

            size_option = driver.find_element_by_xpath("//option[@value='L/XL']") # Add this line

            save_screenshot(driver, SCREENSHOT_NAME)
        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const SKIMS_GET_TEXT = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()

            size_select = driver.find_element_by_id('Option1')
            size_select.click()

            size_option = driver.find_element_by_xpath("//option[@value='L/XL']")
            size_text = size_option.text

            save_screenshot(driver, SCREENSHOT_NAME)
        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const SKIMS_CHECK_TEXT = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()

            size_select = driver.find_element_by_id('Option1')
            size_select.click()

            size_option = driver.find_element_by_xpath("//option[@value='L/XL']")
            size_text = size_option.text.lower() # We should do lower so we don't mismatch because of case

            not_in_stock_words = ['waitlist', 'sold out']
            not_in_stock = [item for item in not_in_stock_words if item in size_text]

            if not_in_stock:
                # Then the item is NOT in stock

        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const SKIMS_TEST_METHOD = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()

            size_select = driver.find_element_by_id('Option1')
            size_select.click()

            size_option = driver.find_element_by_xpath("//option[@value='L/XL']")
            size_text = size_option.text.lower()

            not_in_stock_words = ['waitlist', 'sold out']
            not_in_stock = [item for item in not_in_stock_words if item in size_text]

            if not_in_stock:
                save_screenshot(driver, SCREENSHOT_NAME)
                send_email(prepare_email(link))

        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const SKIMS_IF_NOT_NOT = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

        try:
            ActionChains(driver).send_keys(Keys.ESCAPE).perform()

            color_button = driver.find_element_by_xpath(color_button_xpath)
            color_button.click()

            size_select = driver.find_element_by_id('Option1')
            size_select.click()

            size_option = driver.find_element_by_xpath("//option[@value='L/XL']")
            size_text = size_option.text.lower()

            not_in_stock_words = ['waitlist', 'sold out']
            not_in_stock = [item for item in not_in_stock_words if item in size_text]

            if not not_in_stock:
                save_screenshot(driver, SCREENSHOT_NAME)
                send_email(prepare_email(link))

        except ElementClickInterceptedException:
            save_screenshot(driver, SCREENSHOT_NAME, 'error')
            print('Error - saved screenshot')

        print('Success')`

const SKIMS_LINKS = `https://skims.com/products/cozy-knit-robe-stone
https://skims.com/products/cozy-knit-robe-bone`

const FOR_LINK = `for link in f:`

const PREPARE_EMAIL = `def prepare_email(link):
      # Set email parameters
    email_params = {}

    subject = "Back in Stock!"

    email_params['subject'] = subject
    email_params['body'] = """                            <p>%s</p>
                            <p>Screenshot<br/>
                                <img src="cid:image1">
                            </p>
                            """ % link
    email_params['screenshot_name'] = SCREENSHOT_NAME
    return email_params`

const SAVE_SCREENSHOT = `def save_screenshot(driver, screenshot_name, error = ''):
    os.makedirs("screenshots", exist_ok=True) # Make directory 'screenshots' in your project folder
    screenshot_name = "screenshots/%s%s" % (error, screenshot_name) # Screenshot name defined as SCREENSHOT_NAME in back_in_stock.py
    driver.save_screenshot(os.path.abspath(screenshot_name)) # Save the screenshot in the screenshots directory`

const SEND_EMAIL = `def send_email(params):
    # Define the to and from emails
    from_email = FROM_EMAIL
    to_email = TO_EMAIL

    # Set up message subject and address params
    msg = MIMEMultipart('related')
    msg['Subject'] = params['subject']
    msg['From'] = from_email
    msg['To'] = to_email

    # Create the body of the message.
    html = params['body']

    # Get the screenshot that we just saved in save_screenshot and insert into email
    screenshot_name = "screenshots/%s" % params['screenshot_name']
    img_file = open(os.path.abspath(screenshot_name), 'rb')
    img = img_file.read()
    msgImg = MIMEImage(img, 'png')
    msgImg.add_header('Content-ID', '<image1>')
    msgImg.add_header('Content-Disposition', 'inline', filename=screenshot_name)

    # Record the MIME types (we're sending this email as an html)
    msgHtml = MIMEText(html, 'html')
    msg.attach(msgHtml)
    msg.attach(msgImg)

    # Send the prepared from your FROM_EMAIL using your APP_PASSWORD
    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.login(from_email, APP_PASSWORD)
    server.sendmail(from_email, to_email, msg.as_string())

    server.quit()`

const VOLUME_WORKDIR = `VOLUME /back_in_stock
WORKDIR /back_in_stock`

const DOCK_RUN = `docker run -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock`

const SKIMS_DEBUG = `def skims(driver):
    f = open("skims.txt", "r")

    for link in f:
        link = link.strip("\n")
        driver.get(link)

        pdb.set_trace()
        color_button = driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")`

const RUN_INTERACTIVE = `$ docker run -it -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock

> /back_in_stock/back_in_stock.py(51)skims()
-> color_button = driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")
(Pdb)`

const SKIMS_PDB = `-> color_button = driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")
(Pdb) driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")
<selenium.webdriver.remote.webelement.WebElement (session="008b4713ac0bca3399cdb15ade383fa3", element="d383ba17-e8c0-4ea7-abcf-01bcedb61d18")>`

const WEB_ELEMENT = `<selenium.webdriver.remote.webelement.WebElement (session="008b4713ac0bca3399cdb15ade383fa3", element="d383ba17-e8c0-4ea7-abcf-01bcedb61d18")>`

const COLOR_BUTTON = `-> color_button = driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")
(Pdb) n
> /back_in_stock/back_in_stock.py(46)skims()
-> for link in f:
(Pdb) color_button
<selenium.webdriver.remote.webelement.WebElement (session="132f274803d4e0760a994fa0ff7edcab", element="76e66729-cf4f-4017-a4a9-ebc9f1aec43f")>`

const COLOR_BUTTON_CLICK = `(Pdb) color_button.click()`

const DEBUG_ERROR = `*** selenium.common.exceptions.ElementClickInterceptedException: Message: element click intercepted: Element <span class="config__color-inner swatch" data-color="STONE" style="background-color: rgb(194, 184, 176);"></span> is not clickable at point (1036, 374). Other element would receive the click: <div class="needsclick Modal__ModalPortalStyled-sc-1oy3zf1-0 RaFgj klaviyo-form kl-private-reset-css-Xuajs1" formtype="POPUP" overlaycolor="rgba(20,20,20,0.13)" modalscale="1">...</div>
  (Session info: headless chrome=85.0.4183.102)`

const PDB_SCREENSHOT = `(Pdb) save_screenshot(driver, SCREENSHOT_NAME)`

const CATCH_ERROR = `#...
  from selenium.common.exceptions import NoSuchElementException, InvalidArgumentException, ElementClickInterceptedException # Added ElementClickInterceptedException to import the error
  #...


  def skims(driver):
      f = open("skims.txt", "r")

      for link in f:
          link = link.strip("\n")
          driver.get(link)

          try:
              color_button = driver.find_element_by_xpath("/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]")
              color_button.click()
          except ElementClickInterceptedException: # Catching the error
              save_screenshot(driver, SCREENSHOT_NAME)
              print('Error - saved screenshot')`

const RUN_TO_CATCH_ERROR = `$ docker run -it -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock
Error - saved screenshot`

const PRESS_ESC = `ActionChains(driver).send_keys(Keys.ESCAPE).perform()`

const NEW_SKIMS_CODE = `def skims(driver):
  f = open("skims.txt", "r")

  for link in f:
      link = link.strip("\n")
      driver.get(link)

      color_button_xpath = "/html/body/main/section[1]/div/div/section[1]/div/div[2]/div[3]/div/button[4]/span[1]"

      try:
          ActionChains(driver).send_keys(Keys.ESCAPE).perform()

          color_button = driver.find_element_by_xpath(color_button_xpath)
          color_button.click()
      except ElementClickInterceptedException:
          save_screenshot(driver, SCREENSHOT_NAME)
          print('Error - saved screenshot')

      print('Success')`

const RUN_FOR_SUCCESS = `$ docker run -it -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock
Success`

const ALIAS = `$ alias reload_cool_thing_to_do='launchctl unload -w /Library/LaunchDaemons/$(ls /Library/LaunchDaemons/ | grep cool_thing_to_do) && launchctl load -w /Library/LaunchDaemons/$(ls /Library/LaunchDaemons/ | grep cool_thing_to_do)'
$ reload_cool_thing_to_do`

const COMMENT = `# This is a comment`

const DOCKER_PDB = `$ docker run -it -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock`

const DOCKER_NO_PDB = `$ docker run -v /Users/jianajavier/workspace/back_in_stock:/back_in_stock back_in_stock`

const CODE_BLOCKS = {
    BREW: BREW,
    CLONE: CLONE,
    CONSTANTS: CONSTANTS,
    BUILD_CONTAINER: BUILD_CONTAINER,
    RUN_CONTAINER: RUN_CONTAINER,
    PLIST: PLIST,
    LAUNCH_CTL: LAUNCH_CTL,
    LAUNCH_ALIAS: LAUNCH_ALIAS,
    XML_TIME: XML_TIME,
    LINK_IN_FILE: LINK_IN_FILE,
    ADD_METHOD: ADD_METHOD,
    BUTTON_HTML: BUTTON_HTML,
    BUTTON_CLASSES: BUTTON_CLASSES,
    SEL_FIND_BY: SEL_FIND_BY,
    NEW_LULU: NEW_LULU,
    CHECK_ADD_ENABLED: CHECK_ADD_ENABLED,
    EMAIL_IF_ENABLED: EMAIL_IF_ENABLED,
    CALL_IN_MAIN: CALL_IN_MAIN,
    TEST_CODE: TEST_CODE,
    RUN_CODE: RUN_CODE,
    CREATE_SKIMS: CREATE_SKIMS,
    NEW_SKIMS_METHOD: NEW_SKIMS_METHOD,
    CALL_NEW_SKIMS: CALL_NEW_SKIMS,
    FIND_ELEM_BY_XPATH: FIND_ELEM_BY_XPATH,
    FILL_XPATH: FILL_XPATH,
    SKIMS_METHOD_EDIT: SKIMS_METHOD_EDIT,
    SKIMS_CLICK_COLOR_BUTTON: SKIMS_CLICK_COLOR_BUTTON,
    RUN_SKIMS: RUN_SKIMS,
    OPTION_NIS: OPTION_NIS,
    SKIMS_XPATH: SKIMS_XPATH,
    SKIMS_GET_TEXT: SKIMS_GET_TEXT,
    SKIMS_CHECK_TEXT: SKIMS_CHECK_TEXT,
    SKIMS_TEST_METHOD: SKIMS_TEST_METHOD,
    SKIMS_IF_NOT_NOT: SKIMS_IF_NOT_NOT,
    SKIMS_LINKS: SKIMS_LINKS,
    FOR_LINK: FOR_LINK,
    PREPARE_EMAIL: PREPARE_EMAIL,
    SAVE_SCREENSHOT: SAVE_SCREENSHOT,
    SEND_EMAIL: SEND_EMAIL,
    VOLUME_WORKDIR: VOLUME_WORKDIR,
    DOCK_RUN: DOCK_RUN,
    SKIMS_DEBUG: SKIMS_DEBUG,
    RUN_INTERACTIVE: RUN_INTERACTIVE,
    SKIMS_PDB: SKIMS_PDB,
    WEB_ELEMENT: WEB_ELEMENT,
    COLOR_BUTTON: COLOR_BUTTON,
    COLOR_BUTTON_CLICK: COLOR_BUTTON_CLICK,
    DEBUG_ERROR: DEBUG_ERROR,
    PDB_SCREENSHOT: PDB_SCREENSHOT,
    CATCH_ERROR: CATCH_ERROR,
    RUN_TO_CATCH_ERROR: RUN_TO_CATCH_ERROR,
    PRESS_ESC: PRESS_ESC,
    NEW_SKIMS_CODE: NEW_SKIMS_CODE,
    RUN_FOR_SUCCESS: RUN_FOR_SUCCESS,
    ALIAS: ALIAS,
    COMMENT: COMMENT,
    DOCKER_PDB: DOCKER_PDB,
    DOCKER_NO_PDB: DOCKER_NO_PDB,
}

export default CODE_BLOCKS;
