from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    nameAdm = db.Column(db.String(50), nullable=False)
    password = db.Column(db.Integer, nullable=False)
    passwordAdm = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone = db.Column(db.Integer, nullable=False)
    default_shipping_address = db.Column(db.Integer, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "nameAdm": self.nameAdm,
            "password": self.password,
            "passwordAdm": self.passwordAdm,
            "email": self.email,
            "phone": self.phone,
            "default_shipping_address": self.default_shipping_address
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


class Product(db.Model):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    sku = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String(250), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Integer, nullable=False)
    thumbnail = db.Column(db.String(250), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"))
    categories = db.relationship("Category")


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(250), nullable=False)
    thumbnail = db.Column(db.String(250), nullable=False)


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    amount = db.Column(db.Integer)
    shipping_address = db.Column(db.Integer)
    order_address = db.Column(db.Integer, nullable=False)
    order_date = db.Column(db.DateTime, nullable=False)
    order_email = db.Column(db.String(250), nullable=False)
    order_status = db.Column(db.String(250), nullable=False)
    user = db.relationship("User")


class OrderDetail(db.Model):
    __tablename__ = "order_details"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"))
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"))
    price = db.Column(db.Integer)
    quatity = db.Column(db.Integer)
    order = db.relationship("Order")
    products = db.relationship("Product")


class Messsage(db.Model):
    __tablename__ = "messages"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    message = db.Column(db.String(250), nullable=False)
    user = db.relationship('User')

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "message": self.message,
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
