"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yup_1 = require("yup");
exports.default = yup_1.object({
    body: yup_1.object({
        destination: yup_1.string()
            .url("Must be a valid URL")
            .required("Destination is required"),
    }),
});
