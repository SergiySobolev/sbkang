<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <script src="<c:url value="/script/lib/angular.js"/>"></script>
  <script src="<c:url value="/script/lib/angular-animate.js"/>"></script>
  <script src="<c:url value="/script/slideshow/slideshowModule.js"/>"></script>
  <script src="<c:url value="/script/slideshow/slideshowDirectives.js"/>"></script>
  <script src="<c:url value="/script/slideshow/slideshowController.js"/>"></script>
  <link rel="stylesheet" type="text/css" media="screen" href="<c:url value="/css/slideshow.css"/>"/>
  <title>Slideshow</title>
</head>
<body>
<div ng-app="slideshowModule" ng-controller="slideshowController as slideshow">
      <slider images="slideshow.images"></slider>
</div>
</body>
</html>
