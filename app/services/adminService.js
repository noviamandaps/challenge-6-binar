const adminRepository = require("../repositories/adminRepository");

module.exports = {
    findAll() {
        return adminRepository.getAll();
    },
    findById(id) {
        return adminRepository.getById(id);
    },
    findByEmail(email) {
        return adminRepository.getByEmail(email);
    },
    create(admin) {
        return adminRepository.create(admin);
    },
};