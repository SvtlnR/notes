notesApp.factory("notesService", function($window) {
	var arr = localStorage.getItem("notes");
	var notes = arr ? JSON.parse(arr) : [];
	var lastNoteId;
	if (notes.length === 0) {
		lastNoteId = 0;
	} else {
		lastNoteId = notes[notes.length - 1]["id"];
	}
	return {
		getNoteById: function(id) {
			return notes.find(x => x.id === Number(id));
		},
		getNotes: function() {
			return notes;
		},
		saveChanges: function(id, title, description) {
			notes.find(x => x.id === id).data["title"] = title;
			notes.find(x => x.id === id).data["description"] = description;
			localStorage.setItem("notes", JSON.stringify(notes));
		},
		deleteNote: function(id) {
			notes.splice(notes.findIndex(x => x.id === id), 1);
			localStorage.setItem("notes", JSON.stringify(notes));
		},
		addNote: function(title, description) {
			lastNoteId++;
			notes.push({
				id: lastNoteId,
				data: {
					title: title,
					description: description,
				}
			});
			localStorage.setItem("notes", JSON.stringify(notes));
		}
	}
});