Here are 10 examples of how a pentester might use console.assert() 
to test for various security vulnerabilities or behaviors:

Check for Insecure HTTP
console.assert(location.protocol === 'https:', 'The page is not served over HTTPS'); // This will be logged if the page is not using HTTPS

Validate Content Security Policy
const csp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
console.assert(csp !== null, 'Content Security Policy is not set'); // This will be logged if CSP is missing

Check for Cross-Site Scripting (XSS) Protection
const xssProtection = document.querySelector('meta[http-equiv="X-XSS-Protection"]');
console.assert(xssProtection !== null, 'X-XSS-Protection header is not set'); // This will be logged if XSS protection is missing

Detect Exposed Server Information
const serverHeader = fetch(location.href).then(response => {
    const server = response.headers.get('Server');
    console.assert(server === null, 'Server information is exposed'); // This will be logged if the Server header is present
});

Verify Secure Cookies
document.cookie.split(';').forEach(cookie => {
    console.assert(cookie.includes('Secure'), 'Cookie is not marked as Secure'); // This will be logged for any cookie not marked as Secure
});


Check for Referrer Policy
const referrerPolicy = document.querySelector('meta[name="referrer"]');
console.assert(referrerPolicy !== null, 'Referrer Policy is not set'); // This will be logged if Referrer Policy is missing


Validate Input Sanitization
const input = document.querySelector('input[name="username"]');
input.value = '<script>alert(1)</script>';
console.assert(input.value === '', 'Input is not sanitized'); // This will be logged if input is not sanitized

Verify SameSite Attribute on Cookies
document.cookie.split(';').forEach(cookie => {
    console.assert(cookie.includes('SameSite'), 'Cookie is not marked with SameSite attribute'); // This will be logged for any cookie not marked with SameSite
});


Check for Clickjacking Protection
const frameOptions = document.querySelector('meta[http-equiv="X-Frame-Options"]');
console.assert(frameOptions !== null, 'X-Frame-Options header is not set'); // This will be logged if X-Frame-Options is missing



Test for Open Redirects
const link = document.createElement('a');
link.href = '/redirect?url=http://evil.com';
document.body.appendChild(link);
link.click();
setTimeout(() => {
    console.assert(location.href !== 'http://evil.com', 'Open redirect vulnerability found'); // This will be logged if an open redirect is present
}, 1000);


These examples can be run in the Chrome Developer Tools console by right-clicking on a web page, selecting "Inspect", and then navigating to the "Console" tab. Copy and paste the code snippets into the console and press Enter to see the results. These assertions help in identifying potential security vulnerabilities during pentesting.

  
