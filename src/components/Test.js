

/**
 * types of testing
 *      - Manual Testing 
 *          - Human testing a code by giving tricky test cases and try to break code
 *  
 *      - Automated Testing 
 *          - Code testing a code,bcuz where there is human there might be an error, hence automated testing 
 *          - Eg: Seleninum Testing (performs E2E testing)
 * 
 * 
 *  
 * 
 * types of testing
 *  
 *  1) E2E testing - End to End testing
 * 
 *      - Covers entire user journey by simulating a user which covers the entire flow
 *      - uses HEADLESS browser
 *          - A headless browser is a web browser without a graphical user interface. 
 *          - Headless browsers provide automated control of a web page in an environment similar to popular web browsers, 
 *          - but they are executed via a command-line interface or using network communication.
 *          - Why do we use use HEADLESS browser ?
 *              - It is fast beacuse it doesn't need to paint on the browser
 *              - That means it doesn't need to do all the extra work that needed to create a view
 * 
 *  2) Unit Testing 
 *      
 *      - Testing small unit or feature 
 * 
 *  3) Integration Testing
 * 
 *      - Testing the integration between different units or features 
 *      - It's like testing the whole module ( a module contains many units and an app/system contains many modules)
 * 
 *  
 * 
 *  There are many types of testing, but developers need to know UNIT testing and INTEGRATION testing * 
 */


/**
 * Setting Up ang Using React Testing Library
 * 
 * 1) Install React Testing Library
 *      - npm i -D @testing-library/react
 * 
 * 2) Install Jest
 *      - npm i -D jest
 * 
 * 3) Configure Jest
 *      - npx jest -init
 *          - asks some config questions and creates "jest.config.js" file
 * 
 * 4) Run the test cases
 *      - npm run jest
 *            or
 *      - npm run test (if "test" : "jest" is in scripts object of package.json file )
 * 
 *  5) It is asking to install "jest-environment-jsdom" by throwing an error
 *      - npm i -D "jest-environment-jsdom"
 * 
 *  6) Now creating test files
 *      - First we create a test files folder in components folder with name dunder test ( __test__ )
 *      - dunder is a naming convention : dunder means double underscore
 *      - And in dunder test folder we create a file with naming convention "sum.test.js" for a file "sum.js"
 *      - Write test case using  (expect().toBe())
 *          - test("name", ()=>{expect(sum(2,3)).toBe(5)})
 *  
 *  7) Configure babel
 *      - We do this because of fileName.test.js file dont understand import and it throws error if we run test
 *      - npm install --save-dev babel-jest @babel/core @babel/preset-env
 *      - we add some config to ".babelrc"(this file only takes json) file or "babel.config.json"
 * 
 *  8) add coverage folder to .gitignore
 *      - coverage folder has reports and data about test details
 *      - it is created when we run the test
 * 
 *  9) We need to install @babel/preset-react
 *      - When we run the test cases, it doesn't run on browser, it runs on jsdom
 *      - it creates a small browser like container and then it runs testing in it
 *      - so that environment dont understand jsx so we need to to install @babel/preset-react and configure .babelrc file
 *          - npm i -D @babel/preset-react
 *          - ["@babel/preset-react", {"runtime": "automatic"}] - add this to the array of presets in .babelrc file
 * 
 *  10) Now it doesn't understand images so we use mocks in pace of images while testing
 *      - We create a dummyLogo.js file
 *      - Now we say to jest to take this as alternative for images and logos by adding this in jeset.config.js file
 *          - moduleNameMapper: {
                "\\.(png|jpg|svg)$" : "../mocks/dummyLogo.js",
            },
 *          
 *  11) Now we provide store to it, by using <Provider> from "react-redux"
 *      - We wrap <Header/> inside <Provider store={store}/>
 *  
 * 
 * 
 * -----------------------  Now run the test cases again (npm run test)  ---------------------------
 *      
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * This testing doesn't run on browser, jest take cares about it that's why we need to install many things (like babel) to make test run and make jest understand the code
 */