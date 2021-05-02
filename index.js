class Record {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Album {
    constructor(name) {
        this.name = name;
        this.record = [];
    }

    addRecord (record) {
        if (record instanceof record) {
            this.records.push (record);
        } else {
            throw new Error ('You can only add an instance of record. Argument is not a record: ${record}');
        }
    }

    describe() {
        return `${this.name} has ${this.records.length} records.`;
    }
}

class Menu {
    constructor() {
    this.albums = [];
    this.selectedalbum = null;
}

    start() {
        let selection = this.showMainMenuOptions();

        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createAlbum();
                    break;
                case '2':
                    this.viewAlbum();
                    break;
                case '3':
                    this.deleteAlbum();
                    break;
                case '4':
                    this.displayAlbum();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions ();
            }

            alert ('Goodbye!');
        }

        showMainMenuOptions() {
            return prompt (`
            0) exit
            1) create new album 
            2) view album
            3) delete album 
            4) display all album
            `);
        }

        showAlbumMenuOptions (albumInfo) {
            return prompt (`
                0) back
                1) create record
                2) delete record
                ---------------
                ${albumInfo}
        `);
        }

        displayAlbums() {
            let albumsString = '';
            for (let i = 0; i < this.albums.length; i++) {
                albumString += i + ')' + this.albums[i].name + '\n';
            }
            alert(albumString);
        }

        createAlbum() {
            let name = prompt ('Enter name for new album');
            this.albums.push(new Album(name));
        }

        viewAlbums () {
            let index = prompt ('Enter the index of the index of album you wish to view:');
            if (index > -1 && index < this.albums.length) {
                this.selectedAlbum = this.albums [index];
                let description = 'Album Name: ' + this.selectedalbum.name + '\n';

                for (let i = 0; i < this.selectedAlbum.records.length; i++) {
                    description += i + ') ' + this.selectedAlbum.records[i].name + ' - ' + this.selectedAlbum.records[i].position + '\n';
                }

                let selection = this.showAlbumMenuOptions(description);
                switch (selection) {
                    case '1':
                        this.createRecord ();
                        break;
                    case '2':
                        this.deleterRecord();
                    

                }
            }
        }

        deleteAlbum () {
            let index = prompt ('Enter the index of the album you wish to delete:');
            if (index > -1 && index < this.albums.length) {
                this.albums.splice (index, 1);
            }
        }

        createRecord() {
            let name = prompt ('Enter name for new record:');
            let position = prompt ('Enter position for new record:');
            this.selectedAlbum.records.push(new Record(name, position));
        }

        deleteRecord() {
            let index = prompt ('Enter the index of the record you wish to delete:');
            if (index > -1 && index < this.selectedAlbum.records.length) {
                this.selectedAlbum.recordss.splice(index, 1);
            }
        }
    }

    let menu = new Menu ();
    menu.start();