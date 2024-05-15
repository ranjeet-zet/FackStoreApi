# FackStoreApi

This is the documentation for the FackStoreApi project.

## Description

FackStoreApi is a RESTful API that provides endpoints for managing a fake online store. It allows users to perform various operations such as creating, updating, and deleting products, as well as managing customer orders.

## Installation

To install and run the FackStoreApi project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/FackStoreApi.git
    ```

2. Navigate to the project directory:

    ```bash
    cd FackStoreApi
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    npm start
    ```

## Usage

Once the server is running, you can access the API endpoints using tools like cURL or Postman. Here are some examples:
API Endpoints
```
GET /api/v1/stores: Get all products.
GET /api/v1/stores/categories: Get all main categories.
GET /api/v1/stores/subcategories: Get all subcategories.
GET /api/v1/stores/subcategories/:categories: Get subcategories by main category.
GET /api/v1/stores/product/maincategory/:categories: Get products by main category.
GET /api/v1/stores/product/subcategory/:categories: Get products by subcategory.
```
For detailed information about the available endpoints and their request/response formats, please refer to the API documentation.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.