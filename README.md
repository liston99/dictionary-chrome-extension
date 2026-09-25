# My Dictionary

A simple dictionary Chrome extension built with React that allows users to search for English words and view their definitions directly from the browser.

## Tech Stack

- React
- JavaScript
- Tailwind CSS
- Vite
- Chrome Extension Manifest V3
- Free Dictionary API

## Installation

### 1. Clone the repository
```
git clone <your-repository-url>
```
 
### 2. Navigate to the project directory
```
cd my-dictionary
```
### 3. Install dependencies
```
npm install
```
### 4. Build the project
```
npm run build
```
The production build will be generated inside the dist folder.

## Running in Development

To run the project locally:
```
npm run dev
```
Vite will start the development server and provide a local URL.


## Installing as a Chrome Extension

### 1. Build the project
```
npm run build
```
### 2. Open Chrome Extensions

Go to:
```
chrome://extensions
```
### 3. Enable Developer Mode

Turn on Developer mode in the top-right corner.

### 4. Load the Extension

Click Load unpacked.

### 5. Select the Build Folder

Select the project's dist folder.

### 6. Open My Dictionary

The My Dictionary extension should now appear in your Chrome extensions.

## Updating the Extension

Whenever you make changes to the React application:

npm run build

Then go to:
```
chrome://extensions
```
and click the Reload button for the extension.


#### This project was created for learning and personal use.