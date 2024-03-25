Filenme: SpinUpNodeJSserver.js
Purpose for this git: 
Properly setting up a Node.js environment syntax, for:
  [*] Testing
     especially in a scenario where you're dealing with memory values 
     any form of debugging that doesn't require modifying system-wide settings or installing software 
       outside of user space, 
  [*] Typically does not require root access
       
Set up your Node.js environment
  
1. Installing Node.js Locally
Without root access, you can still install Node.js locally in your home directory.
 One way to do this is by using Node Version Manager (nvm), which allows you to
  manage multiple Node.js versions without needing root permissions.

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
                          # Restart your terminal session
nvm install node          # Install the latest Node.js version
nvm use node              # Use the installed version

This script downloads and runs the nvm installation script,
  installing it in your home directory.
