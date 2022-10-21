const {
    Admin
} = require("../models");

module.exports = {
    getAll() {
        return Admin.findAll();
    },
    getById(id) {
        return Admin.findByPk(id);
    },
    getByEmail(email) {
        return Admin.findOne({
            where: {
                email,
            },
        });
    },
    create(admin) {
        return Admin.create({
            email: admin.email,
            password: admin.password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
    },
};