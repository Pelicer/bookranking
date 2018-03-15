DROP DATABASE IF EXISTS `dbo.bookranking`;
CREATE DATABASE dbo.bookranking;

drop table if exists `tbl_series`
CREATE TABLE tbl_series{
	series_id INT NOT NULL AUTO_INCREMENT,
	series_title INT
	PRIMARY KEY(series_id)
};

drop table if exists `tbl_book`
CREATE TABLE tbl_book{
	book_id INT NOT NULL AUTO_INCREMENT,
	book_index INT,
	book_title VARCHAR(120) NOT NULL,
	series_id INT,
	PRIMARY KEY(book_id),
	FOREIGN KEY(series_id) REFERENCES tbl_series(series_id)
};


/*CREATING GAME OF THRONES*/
INSERT INTO tbl_series VALUES('A Song of Ice and Fire');
	INSERT INTO tbl_book VALUES (1, 'A Game of Thrones');
	INSERT INTO tbl_book VALUES (2, 'A Clash of Kings');
	INSERT INTO tbl_book VALUES (3, 'A Storm of Swords');
	INSERT INTO tbl_book VALUES (4, 'A Feast of Crows');
	INSERT INTO tbl_book VALUES (5, 'A Dance With Dragons');

/*CREATING THE LORD OF THE RINGS*/
INSERT INTO tbl_series VALUES('The Lord of the Rings');
	INSERT INTO tbl_book VALUES (1, 'The Fellowship of the Rings');
	INSERT INTO tbl_book VALUES (1, 'The Two Towers');
	INSERT INTO tbl_book VALUES (3, 'The Return of the Kings');