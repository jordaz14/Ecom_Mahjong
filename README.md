# ECOM APP

> A Mahjong Community

**OVERVIEW:**

I created a web app which allows users to create an account, browse through merchandise, and add items to their cart; my inspiration for this project was to create a template website for my friend who started a local Majhong social club in NYC.  

**SKILLS:**

`React`, `Express`, `JSX`, `CSS (Tailwind)`, `PostgreSQL`

**DESCRIPTION:**

The project is divided into 5 different sections: `Home`, `Events`, `Merch`, `Cart`, `Account`.

The `Home` page features a banner page with the social club's logo, an introductory paragraph describing what the club does, a founders section which displays a modal when a profile card is clicked, and a contact section with links to other socials.

https://github.com/jordaz14/Ecom_Mahjong/assets/125109952/ac087ac8-230f-4587-9a6c-f84a3ae369f6

The `Events` page which displays a list of events happening within the current month, showing placeholders for the location, event description, and link to RSVP; given that this section wasn't the main focus of the app's functionality, I'd like a future iteration of this project to dynamically iterate events from a database on the backend, allowing a user to scroll through different months and their corresponding events.

https://github.com/jordaz14/Ecom_Mahjong/assets/125109952/2db1ac64-9a12-47c1-b123-b9e175e2c1d1

The `Merch` page dynamically outputs product listings from the `products` table, displaying information regarding the name, image, description, and price of the product. Additionally, each product listing has an "add to cart" button which permits a logged-in user to add the item to their cart. 

To further improve this section, I'd like to each product listing to open its own PDP with more content featuring scrollable images, item specifications, product reviews, etc - thus making the app more akin to a proper ecom platform.

https://github.com/jordaz14/Ecom_Mahjong/assets/125109952/2a5026f9-9878-4801-8ae1-683daba14bbf

The `Cart` page displays the products, amounts, and subtotals of products that the user has added to their account; to improve this section, I'd like to add an 'item counter' feature which will allow a user to add or remove items dynamically from the cart page. Currently, this is no functionality for a user to remove or clear items from their account.

https://github.com/jordaz14/Ecom_Mahjong/assets/125109952/d32dffcf-5e27-4247-9dfc-4dad2561dc24

The `Account` incorporates functionality for the user to create an account, log in in to their account, and access a "My Account" page which greets the users and displays buttons to change user settings / log out of their account. 

https://github.com/jordaz14/Ecom_Mahjong/assets/125109952/8399056a-9764-489f-a482-8629669b0886
