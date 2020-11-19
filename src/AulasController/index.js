const express = require('express')
const db = require('../../db.json')

module.exports = {
    async getAula(req, res){
        try {
            return res.status(200).json({db});
        } catch (error) {
            return res.status(404).json({body: "Not found any class"})
        }
    }
}