"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role, Product, Category, Order, Order_detail, Messsage
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash

api = Blueprint('api', __name__)

# ------------------
#              Roles
# ------------------


@api.route("/roles", methods=['GET'])
def get_roles():
    roles = Role.query.all()
    roles = list(map(lambda role: role.serialize(), roles))
    return jsonify(roles), 200


@api.route("/roles/<int:role_id>", methods=['GET'])
def get_role(role_id):
    roles = Role.query.get(role_id)
    roles = list(map(lambda role: role.serialize(), roles))
    return jsonify(roles), 200


@api.route('/roles', methods=['POST'])
def create_role():
    role = Role()
    role.name = request.json.get('name')
    role.save()
    return jsonify(role.serialize()), 201


@api.route('/roles/<int:roles_id>', methods=['DELETE'])
def delete_roles(roles_id):
    roles = Role.query.get(roles_id)
    roles.delete()
    return jsonify(roles.serialize()), 201

# ------------------
#              Users
# check_password_hash  <---- para el proceso de login
# ------------------


@api.route("/users", methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))
    return jsonify(users), 200


@api.route('/users', methods=['POST'])
def create_user():
    user = User()
    user.name = request.json.get('name')
    user.password = request.json.get('password')
    user.email = request.json.get('email')
    user.phone = request.json.get('phone')
    user.default_shipping_address = request.json.get(
        'default_shipping_address')
    user.role_id = request.json.get('role_id')
    user.save()
    return jsonify(user.serialize()), 201


@api.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    user.name = request.json.get('name')
    user.password = request.json.get('password')
    user.email = request.json.get('email')
    user.phone = request.json.get('phone')
    user.default_shipping_address = request.json.get(
        'default_shipping_address')
    user.update()
    return jsonify(user.serialize()), 201


@api.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get(user_id)
    user.delete()
    return jsonify(user.serialize()), 201

# ------------------
#           Products
# ------------------


@api.route("/products", methods=['GET'])
def get_products():
    products = Product.query.all()
    products = list(map(lambda role: product.serialize(), products))
    return jsonify(products), 200


@api.route('/products', methods=['POST'])
def create_products():
    products = Product()
    products.sku = request.json.get('sku')
    products.name = request.json.get('name')
    products.img = request.json.get('img')
    products.description = request.json.get('description')
    products.price = request.json.get('price')
    products.thumbnail = request.json.get('thumbnail')
    products.save()
    return jsonify(products.serialize()), 201


@api.route('/products/<int:products_id>', methods=['PUT'])
def update_products(products_id):
    products = Product.query.get(products_id)
    products.sku = request.json.get('sku')
    products.name = request.json.get('name')
    products.img = request.json.get('img')
    products.description = request.json.get('description')
    products.price = request.json.get('price')
    products.thumbnail = request.json.get('thumbnail')
    products.update()
    return jsonify(products.serialize()), 201


@api.route('/products/<int:products_id>', methods=['DELETE'])
def delete_products(products_id):
    products = Product.query.get(products_id)
    products.delete()
    return jsonify(products.serialize()), 201

# ------------------
#          Category
# ------------------


@api.route("/categories", methods=['GET'])
def get_categories():
    categories = Category.query.all()
    categories = list(map(lambda role: category.serialize(), categories))
    return jsonify(categories), 200


@api.route('/categories', methods=['POST'])
def create_categories():
    categories = Category()
    categories.name = request.json.get('name')
    categories.description = request.json.get('description')
    categories.thumbnail = request.json.get('thumbnail')
    categories.save()


@api.route('/categories/<int:categories_id>', methods=['PUT'])
def update_categories(categories_id):
    categories = Category.query.get(categories_id)
    categories.name = request.json.get('name')
    categories.description = request.json.get('description')
    categories.thumbnail = request.json.get('thumbnail')
    categories.update()
    return jsonify(categories.serialize()), 201


@api.route('/categories/<int:categories_id>', methods=['DELETE'])
def delete_categories(categories_id):
    categories = Category.query.get(categories_id)
    categories.delete()
    return jsonify(categories.serialize()), 201

# ------------------
#         Orders
# ------------------


@api.route("/orders", methods=['GET'])
def get_orders():
    orders = Order.query.all()
    orders = list(map(lambda role: order.serialize(), orders))
    return jsonify(orders), 200


@api.route('/orders', methods=['POST'])
def create_orders():
    orders = Order()
    orders.amount = request.json.get('amount')
    orders.shipping_address = request.json.get('shipping_address')
    orders.order_address = request.json.get('order_address')
    orders.order_date = request.json.get('order_date')
    orders.order_email = request.json.get('order_email')
    orders.order_status = request.json.get('order_status')

    orders.save()
    return jsonify(orders.serialize()), 201


@api.route('/orders/<int:orders_id>', methods=['PUT'])
def update_orders(orders_id):
    orders = Order.query.get(orders_id)
    orders.amount = request.json.get('amount')
    orders.shipping_address = request.json.get('shipping_address')
    orders.order_address = request.json.get('order_address')
    orders.order_date = request.json.get('order_date')
    orders.order_email = request.json.get('order_email')
    orders.order_status = request.json.get('order_status')
    orders.update()
    return jsonify(orders.serialize()), 201


@api.route('/orders/<int:orders_id>', methods=['DELETE'])
def delete_orders(orders_id):
    orders = Order.query.get(orders_id)
    orders.delete()
    return jsonify(orders.serialize()), 201

# ------------------
#      Order Details
# ------------------


@api.route("/order_details", methods=['GET'])
def get_order_details():
    order_details = Order_detail.query.all()
    order_details = list(map(lambda role: order.serialize(), order_details))
    return jsonify(order_details), 200


@api.route('/order_details', methods=['POST'])
def create_order_details():
    order_details = Order_detail()
    order_details.amount = request.json.get('amount')
    order_details.shipping_address = request.json.get('shipping_address')
    order_details.order_address = request.json.get('order_address')
    order_details.order_date = request.json.get('order_date')
    order_details.order_email = request.json.get('order_email')
    order_details.order_status = request.json.get('order_status')

    order_details.save()
    return jsonify(order_details.serialize()), 201


@api.route('/order_details/<int:order_details_id>', methods=['PUT'])
def update_order_details(order_details_id):
    order_details = Order_detail.query.get(order_details_id)
    order_details.amount = request.json.get('amount')
    order_details.shipping_address = request.json.get('shipping_address')
    order_details.order_address = request.json.get('order_address')
    order_details.order_date = request.json.get('order_date')
    order_details.order_email = request.json.get('order_email')
    order_details.order_status = request.json.get('order_status')
    order_details.update()
    return jsonify(order_details.serialize()), 201


@api.route('/order_details/<int:order_details_id>', methods=['DELETE'])
def delete_order_details(order_details_id):
    order_details = Order_detail.query.get(order_details_id)
    order_details.delete()
    return jsonify(order_details.serialize()), 201

# ------------------
#         Messages
# ------------------


@api.route("/messages", methods=['GET'])
def get_messages():
    messages = Messsage.query.all()
    messages = list(map(lambda role: order.serialize(), messages))
    return jsonify(messages), 200


@api.route('/messages', methods=['POST'])
def create_messages():
    messages = Messsage()
    messages.amount = request.json.get('amount')
    messages.shipping_address = request.json.get('shipping_address')
    messages.order_address = request.json.get('order_address')
    messages.order_date = request.json.get('order_date')
    messages.order_email = request.json.get('order_email')
    messages.order_status = request.json.get('order_status')

    messages.save()
    return jsonify(messages.serialize()), 201


@api.route('/messages/<int:messages_id>', methods=['PUT'])
def update_messages(messages_id):
    messages = Messsage.query.get(messages_id)
    messages.amount = request.json.get('amount')
    messages.shipping_address = request.json.get('shipping_address')
    messages.order_address = request.json.get('order_address')
    messages.order_date = request.json.get('order_date')
    messages.order_email = request.json.get('order_email')
    messages.order_status = request.json.get('order_status')
    messages.update()
    return jsonify(messages.serialize()), 201


@api.route('/messages/<int:messages_id>', methods=['DELETE'])
def delete_messages(messages_id):
    messages = Messsage.query.get(messages_id)
    messages.delete()
    return jsonify(messages.serialize()), 201
