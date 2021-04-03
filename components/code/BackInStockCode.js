const BREW = `$ brew update
$ brew install docker
$ brew install docker-machine`;

const CLONE = `$ cd ~/workspace
$ git clone git@github.com:jianajavier/back_in_stock.git`;

const CONSTANTS = `TO_EMAIL = 'youremail@gmail.com' # Replace between quotes with your email address
FROM_EMAIL = 'yournamescripts@gmail.com' # Replace between quotes with new email address from Step 1
APP_PASSWORD = 'password' # Replace between quotes with the app password you generated in Step 1`;

const CODE_BLOCKS = {
 BREW: BREW,
 CLONE: CLONE,
 CONSTANTS: CONSTANTS,
}

export default CODE_BLOCKS;
