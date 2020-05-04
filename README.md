# angular-orderby-pipe example
 angular orderby pipe for array of strings and objects

1)Order an array of strings

    *ngFor="let model of laptopModelNames| orderBy

2)Order an array of objects

    *ngFor="let laptop of laptops| orderBy:'brand':'desc'"

3)Order an array of objects with nested object

    *ngFor="let laptop of laptopsWithConfig| orderBy:'config.memory'"


