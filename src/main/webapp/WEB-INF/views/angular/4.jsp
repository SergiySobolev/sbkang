<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="jawr" uri="http://jawr.net/tags" %>
<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jawr:script src="/script/all.js"/>
<link rel="stylesheet" type="text/css" media="screen" href="/css/common.css"/>
<title>Example 4(Events)</title>
</head>

<body>
    <div ng-app="eventExample" ng-controller="EventController">
        Root scope MyEvent count: {{count}}
        <ul>
            <li ng-repeat="i in [1]" ng-controller="EventController">
                <button ng-click="$emit('MyEvent')">$emit('MyEvent')</button>
                <button ng-click="$broadcast('MyEvent')">$broadcast('MyEvent')</button>
                <br>
                Middle scope <tt>MyEvent</tt> count: {{count}}
                <ul>
                    <li ng-repeat="item in [1, 2]" ng-controller="EventController">
                        Leaf scope <tt>MyEvent</tt> count: {{count}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</body>

</html>
