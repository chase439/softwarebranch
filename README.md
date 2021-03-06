# Software Branch

This project is being served with Github Pages at http://chase439.github.io/softwarebranch

## DNS Config:
 - 1 "A" record was configured with 4 Github IP addresses
   - @, A, 1h, (`185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`)
 - 1 CNAME record was configured to forward www. subdomain to root domain
   - www (name), CNAME (type), 1H (TTL), `example.com` (data)
 - root domain is indicated by @, a subdomain can be like “www”.
 - CNAME (canonical name) records map an alias domain name to a canonical (true) domain name.
   - CNAME records cannot be set for the root domain.
   - Also, the target of a CNAME record can only be a domain name; paths are not allowed.

## Github Config:
 - Under Settings, set custom domain, which will create/modify CNAME file in repo.

## Github Page will automatically
 - provide https://
 - redirect `www.example.com` to `example.com` if your Github custom domain setting is `example.com`
 - redirect `example.com` to `www.example.com` if your Github custom domain setting is `www.example.com`

## Miscellaneous
 - [Instructions to Send email from static pages](https://formspree.io)
 - [Instructions to Embed Tweets](https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview.html)

## References:
 - https://help.github.com/articles/setting-up-an-apex-domain/
 - https://support.google.com/domains/answer/3251147?hl=en - CNAME
 - https://support.google.com/domains/answer/6365838?hl=en - Domain forwarding
 - https://support.google.com/domains/answer/4522141?hl=en - Domain forwarding details

