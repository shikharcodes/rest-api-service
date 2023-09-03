const express = require("express");
const { 
    handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById, 
    handleDeleteUserById,
    handleCreateNewUser 
} = require("../controllers/user");

const router = express.Router();

router.route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

// router.get("/users", async (req, res) => {
//     const allDbUsers = await(User.find({}));
//     const html = `
//         <ul>
//             ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
//         </ul>
//     `;
//     res.send(html);
// });

router
    .route("/:id")
    .get(getUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;
