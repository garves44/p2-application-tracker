//================[Associations]=================/
Interviews.belongsTo(Jobs, {
    foreignKey: {
        key: "Id"
    }
})
Jobs.belongTo(Resume, {
    foreignKey: {
        Key: "Id"
    }
})
Resume.belongsTo(Interviews, Jobs {
    foreingKey: {
        Key: "Id"
    }
})
