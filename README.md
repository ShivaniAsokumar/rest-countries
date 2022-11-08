# [Where in the world?](https://shivani-asokumar-rest-countries.netlify.app/)
This app pulls country data by sending requests to the [REST Countries API](https://restcountries.com/). It displays all the countries in the world with an image of their `Flag`, `Name`, `Population`, `Region`, and `Capital`. It displays the data in a user friendly manner and allows the user to customize how the data is presented. This app has both dark and light modes. 

--- 

### Website URL
* [https://shivani-asokumar-rest-countries.netlify.app/](https://shivani-asokumar-rest-countries.netlify.app/)

### How to run the app
1. Clone the app locally using the following command `git clone https://github.com/ShivaniAsokumar/rest-countries.git`
2. Once inside the directory, run `npm install`
3. Run `npm start`
4. Navigate to `http://localhost:3000` to use the app

### Features
#### 1. Search for a country...
  * User can search for a specific country and that country's card will be displayed
#### 2. Filter by Region
  * Initially, the countries are displayed in order of population. 
  * User can filter countries by region so that only countries from that specific region are displayed
  * The regions are: Africa, America, Asia, Europe, Oceania
#### 3. View Card
  * User can view the individual cards for any country. 
  * This displays more data about the country including its `Border Countries`
#### 4. View `Border Countries`
  * User can click on any border country and that country's card will be displayed
#### 5. Light/Dark Mode
  * User can switch between Light and Dark modes

### What I learned
1. React Router
2. Context API
3. How to integrate Dark and Light mode in CSS
4. How to integrate a Search feature

### How the app looks
1. Initial Screen
![image](https://user-images.githubusercontent.com/62733107/200663357-818729f8-537d-4510-bc27-565d5f07be02.png)

2. Filter by Region: America
![image](https://user-images.githubusercontent.com/62733107/200663443-38efcf12-418a-4943-96c5-20609fecf4e9.png)

3. View Country Page
![image](https://user-images.githubusercontent.com/62733107/200663671-64284ea6-4af6-4434-ad27-99619a7be1c8.png)

4. Light Mode
![image](https://user-images.githubusercontent.com/62733107/200663728-eb486635-dedd-4faf-ab75-b09efc64dab8.png)


  

