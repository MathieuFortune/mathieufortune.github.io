---
layout: post
title:  "Checkout project - feedback"
date:   2016-05-24 13:45:01 +0200
author: Mathieu Fortune
theme: Website redesign project

---

## Overview


1001pharmacies.com is an online marketplace in the health and well-being activity.
It purpose is to connect french pharmacists directly with their users through an access to their products online.
Each pharmacy can manage its own parapharmacies catalog and its stock.

The checkout project is part of a redesign project in order to improve usability and user experience.

Visit the [website](http://www.1001pharmacies.com/ "Visit 1001pharmacies.com website")

## Problem


The first version of 1001pharmacies.com's checkout process has proven that it needed some redesign, from the usability point of view. Based on our collected data, the user's abandon rate and exit rate were high.

## Research


We needed to better understand these datas. We conducted user researches on the checkout process to learn more about their characteristics, needs, desires and to evaluate their perception about 1001pharmacies.com's offer.

We decide to choose our loyal users to find their pain points, so we could fix them and their use of the product.

This research has led us to 2 hypotesis.

First, the shipping cost is a source of questions and they can be too high.
To understand, it's important to know that when a user add differents products in his cart, it can occur that some products are available in multiple sellers, this create multi parcel so the shipping cost is increased.

Second, to make an order the user need to sign up to an account. This generate an obstacle to the purchase.
This is consistent with recent reports showing that a high abandon rate is caused by a mandatory sign up.

## Challenge


Some attempts has already be done to improve offer's comprehension inside checkout process.
An informative message, stock optimization algorithm, ... But even if these made some results, this not answered every problems like sign up to a user account.

Redesigning the checkout process without suspending website's activity was mandatory.
In an agile approach to these problems, we decided to deliver continuously with a first minimum viable product for performing a complete purchasing process with minimum functionality required.
To focus our efforts, LEAN methods have also allowed us to establish a clear objective:
<blockquote>
A user who's not used to purchase online must simply and confidently made a purchase on our website.
</blockquote>

## Production


As a follow up to this method, from a designer point of view, I decided to follow the Design Thinking method to realize this project. I let the design emerged as the user stories where developped to stick to a lean approch and I iterate with user feedback to make sure that their needs was fulfilled.

According to the front development, I chose Twitter bootstrap 3 with LESS in order to let the back-end developpers be more confortable with technos used in front and Javascript vanilla because this is a better choice in terms of performance than JQuery. The project is powered with Symfony 2 and I replace assetic with gulp to have more control on assets.


## Results


<div class="large" markdown="1">

<figure markdown="1">
![New 1001pharmacies.com's cart [step 1]](/images/checkout-new-step1-1.jpg "New 1001pharmacies.com's cart [step 1]")
<figcaption>
  New 1001pharmacies.com's cart [step 1]
</figcaption>
{: .text-center}
</figure>

<figure markdown="1">
![New 1001pharmacies.com's cart [step 2]](/images/checkout-new-step2.jpg "New 1001pharmacies.com's cart [step 2]")
<figcaption>
New 1001pharmacies.com's cart [step 2]
</figcaption>
{: .text-center}
</figure>

<figure markdown="1">
![New 1001pharmacies.com's cart [step 3]](/images/checkout-new-step3.jpg "New 1001pharmacies.com's cart [step 3]")
<figcaption>
New 1001pharmacies.com's cart [step 3]
</figcaption>
{: .text-center}
</figure>

<figure markdown="1">
![New 1001pharmacies.com's cart [step 4]](/images/checkout-new-step4.jpg "New 1001pharmacies.com's cart [step 4]")
<figcaption>
New 1001pharmacies.com's cart [step 4]
</figcaption>
{: .text-center}
</figure>

</div>

## Conclusion

Checkout process redesign is still in development. The second mvp release is online and there is not many work left to totally replace the old version. Analytics data have already shown an increase of conversion rate and a decrease of abandon rate.
