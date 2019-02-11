# Silent Quadrant Password Protection

## What is Silent Quadrant Password Protection?

Silent Quadrant Password Protection is an extension that you can drop into any web page which dramatically improves the security of users accessing your website.
This extension works on Chrome and Firefox.

Silent Quadrant Password Protection works by binding itself to all `input` elements on the page of type
`email` or `password`. Whenever a user enters a new value into one of these
`input` elements, Silent Quadrant Password Protection will check the user's email / password against
the fabulous [Have I Been Pwned?](https://haveibeenpwned.com) API service to see whether or not
the user's email OR password has been breached in the past.

Finally, if appropriate, Silent Quadrant Password Protectionwill inform the user that their credentials
were previously breached, give them some useful information, and ask them to
update their password as soon as they can to reduce the risk that their account
will be compromised.

Silent Quadrant Password Protection is a new, experimental way to proactively notify users about data
breaches and help casual web users play a more active role in protecting their
online accounts.

We believe that by informing and guiding users to reset their credentials when
necessary, we can all help make the web a safer place &lt;3


## Building

1. Download source code.
2. Open terminal, navigate to the downloaded repository and run commands below:
    ```
    npm install
    npm run build
    ```
    After run these commands, you will see `dist` folder generated.
    
## Testing

- Chrome
    1. Open `chrome://extensions/` in your Google Chrome, and enable `Developer mode`.
    2. Click `Load unpacked`, and then choose `dist` folder in the presented dialog.
    
- Firefox
    1. Open Firefox
    2. Enter `about:debugging` in URL bar
    3. Click `Load Temporary Add-on`
    4. Open the `dist` folder and select any file.
       The extension will be installed, and will stay installed until you restart Firefox.
    
Now you are able to use Silent Quadrant Password Protection Secure Extension.

## Is Silent Quadrant Password Protection Secure?

**YES!**

Silent Quadrant Password Protection never sends or stores password information over the network. It uses
[k-Anonymity](https://www.troyhunt.com/ive-just-launched-pwned-passwords-version-2/)
to safely communicate your sensitive data over the internet without risk.

Silent Quadrant Password Protection is also completely free, open source. If you want to audit the source, or have ideas about how to do things better, please open a
[GitHub issue](https://github.com/Eagle19243/silent-quadrant-chrome/).
