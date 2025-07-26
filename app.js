const readline = require("readline-sync");

const { addEntry, listEntries, deleteEntry } = require("./controllers/journalController");

function startApp()
{
    while (true)
    {
        console.log("\n📓 Daily Journal");
        console.log("1. Add Entry");
        console.log("2. List Entries");
        console.log("3. Delete Entry");
        console.log("4. Exit");

        const choice = readline.question("Choose an option:");

        if (choice === "1")
        {
            const title = readline.question("Enter title:");
            const content = readline.question("Enter content:");
            addEntry(title, content);


        }
        else if (choice === "2")
        {
            listEntries();
        }
        else if (choice === "3")
        {
            const id = parseInt(readline.question("Enter entry ID to delete: "));
            deleteEntry(id);
        }
        else if (choice === "4")
        {
            console.log("👋 Exiting...");
            break;
        }
        else
        {
            console.log("❗ Invalid option.");
        }
    }
}

startApp();