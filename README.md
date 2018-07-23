# Software Branch

This project is being served with Github Pages at http://chase439.github.io/softwarebranch

## DNS Config:
 - 1 "A" record was configured with 4 Github IP addresses
   - @, A, 1h, (`185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`)
 - 1 CNAME record was configured to forward www. subdomain to root domain
   - www (name), CNAME (type), 1H (TTL), `example.com` (data)
 - root domain (indicated by @) or a subdomain (such as “www”).
 - CNAME (canonical name) records map an alias domain name to a canonical (true) domain name.
   - CNAME records cannot be set for the root domain.
   - Also, the target of a CNAME record can only be a domain name; paths are not allowed.

## Github Config:
 - Under Settings, set custom domain, which will create/modify CNAME file in repo.
 
## Github Page will automatically
 - provide https://
 - redirect `www.example.com` to `example.com` if your Github custom domain setting is `example.com`
 - redirect `example.com` to `www.example.com` if your Github custom domain setting is `www.example.com`

## Send email from static pages
Setting it up is easy and free. You don't even have to register.
 1. Setup the HTML form
     1. Change your form's action-attribute to http://formspree.io/your@email.com and replace your@email.com with your own email.
     1. For example,
        ````
        <form action="http://formspree.io/you@email.com">
          <input type="email" name="_replyto">
          <textarea name="body"></textarea>
          <input type="submit" value="Send">
        </form>
        ````
 1. Submit the form and confirm your email address. Go to your website and submit the form once. This will send you an email asking to confirm your email address, so that no one can start sending you spam from random websites.
 1. All set, receive emails. From now on, when someone submits that form, formspree.io will forward you the email.

## References:
 - https://help.github.com/articles/setting-up-an-apex-domain/
 - https://stackoverflow.com/questions/24348223 - send email from static pages, http://formspree.io
 - https://support.google.com/domains/answer/3251147?hl=en - CNAME
 - https://support.google.com/domains/answer/6365838?hl=en - Domain forwarding
 - https://support.google.com/domains/answer/4522141?hl=en - Domain forwarding details

