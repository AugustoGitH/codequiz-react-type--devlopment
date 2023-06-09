"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Quiz_1 = __importDefault(require("../../../../../db/models/Quiz"));
const verifyCredentials_1 = __importDefault(require("../../../../../utils/verifyCredentials"));
function recordMatchData({ resolvedPlayerAnswer, authToken }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { isUser, idUser } = (0, verifyCredentials_1.default)(authToken, process.env.TOKEN_SECRET || "");
        const { answersCorrectly, idQuiz } = resolvedPlayerAnswer;
        try {
            yield Quiz_1.default.updateOne({ _id: idQuiz }, {
                $inc: {
                    completedMatches: 1
                },
                $push: {
                    matchHistory: {
                        isUser,
                        idPlayer: idUser,
                        answers: answersCorrectly
                    }
                },
            });
        }
        catch (error) {
            console.log(error);
            throw new Error("Erro interno do servidor ao capturar resposta do player.");
        }
    });
}
exports.default = recordMatchData;
