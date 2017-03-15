var Docs = require('../models/docs');

function handleError(res, err) {
    return res.send(500, err);
}

exports.viewAllDocs = function(req, res) {
    Docs.find({}).exec(function(err, docs) {
        if (err) {
            return handleError(res, err); }
        res.json({
            docs: docs
        });
    });
};

exports.viewDepartmentDocsByDept = function(req, res) {
		Docs.find({ __userDepartment: req.params.dept }).exec(function(err, docs) {
	        if (err) {
	            return handleError(res, err); 
	        }
	        res.json({
	            docs: docs
	        });
	    });
};

exports.viewDepartmentDocs = function(req, res) {
	Docs.find({ __userDepartment: req.user.department }).exec(function(err, docs) {
		if (err) {
			return handleError(res, err); 
		}
        res.json({
            docs: docs
        });
    });
};

exports.viewDepartmentDocById = function(req, res) {
	if (req.user.role === 'super_user') {
		Docs.find({ _id: req.params.id }).exec(function(err, doc) {
	        if (err) {
	            return handleError(res, err); 
	        }
	        res.json({
	            doc: doc
	        });
	    });
	} else {
		Docs.find({ _id: req.params.id, __userDepartment: req.user.department }).exec(function(err, docs) {
	        if (err) {
	            return handleError(res, err); 
	        }
	        if (!docs.length) { return res.send('You are not authorized to view other department\'s content'); }
	        res.json({
	            docs: docs
	        });
	    });
	}
};
