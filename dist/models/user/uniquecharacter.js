"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const SEQ = __importStar(require("sequelize-typescript"));
const Models = __importStar(require("../models"));
let UserUniqueCharacter = class UserUniqueCharacter extends SEQ.Model {
};
__decorate([
    SEQ.PrimaryKey,
    SEQ.Column,
    SEQ.ForeignKey(() => Models.User),
    __metadata("design:type", Number)
], UserUniqueCharacter.prototype, "user_id", void 0);
__decorate([
    SEQ.PrimaryKey,
    SEQ.Column,
    __metadata("design:type", Number)
], UserUniqueCharacter.prototype, "character_id", void 0);
__decorate([
    SEQ.CreatedAt,
    __metadata("design:type", Date)
], UserUniqueCharacter.prototype, "created_at", void 0);
__decorate([
    SEQ.UpdatedAt,
    __metadata("design:type", Date)
], UserUniqueCharacter.prototype, "updated_at", void 0);
UserUniqueCharacter = __decorate([
    SEQ.Table
], UserUniqueCharacter);
exports.default = UserUniqueCharacter;
