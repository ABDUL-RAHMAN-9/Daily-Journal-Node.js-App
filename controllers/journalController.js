const { readData, writeData } = require("../utils/fileHelper");

function addEntry(title, content)
{
    const data = readData();
    const newEntry = {
        id: Date.now(),
        data: new Date().toLocaleDateString(),
        title,
        content
    };
    data.push(newEntry);
    writeData(data);
    console.log("Entry added successfully.");


}


function listEntries()
{
    const data = readData();
    if (data.length === 0)
    {
        console.log("No entries found.");
        return;
    }
    data.forEach((entry, index) =>
    {
        console.log(`\n#${index + 1} - ${entry.date} 🗓️`);
        console.log(`Title: ${entry.title}`);
        console.log(`content:${entry.content}`);
    });
}

function deleteEntry(id)
{
    let data = readData();
    const orignalLenght = data.length;
    data = data.filter(entry => entry.id !== id);
    if (data.length === orignalLenght)
    {
        console.log("❌ Entry not found.");
        return;
    }
    writeData(data);
    console.log("🗑️ Entry deleted.");

}

module.exports = { addEntry, listEntries, deleteEntry };