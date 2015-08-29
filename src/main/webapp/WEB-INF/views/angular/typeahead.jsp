<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <script src="<c:url value="/script/lib/angular.js"/>"></script>
    <script src="<c:url value="/script/lib/angular-animate.js"/>"></script>
    <script src="<c:url value="/script/typeahead/typeaheadModule.js"/>"></script>
    <script src="<c:url value="/script/typeahead/typeaheadFactories.js"/>"></script>
    <script src="<c:url value="/script/typeahead/typeaheadController.js"/>"></script>
    <script src="<c:url value="/script/typeahead/typeaheadDirectives.js"/>"></script>
    <link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/common.css"/>"/>
    <title>Typeahead</title>
</head>
<body ng-app="typeaheadModule">
<div class="container" ng-controller="typeAheadController">
    <h1>TypeAhead Using AngularJS</h1>
    <typeahead items="items" prompt="Start typing a US state" title="name" subtitle="abbreviation" model="name" on-select="onItemSelected()" ></typeahead>
</div>
</body>
</html>
