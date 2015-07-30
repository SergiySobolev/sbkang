describe('knapSack module testing', function(){

    var knapSackService;

    beforeEach(function (){

        module('knapSackModule');

        inject(function(_knapSackService_) {
            knapSackService = _knapSackService_;
        });
    });

    it('it should be function', function(){
        expect(angular.isFunction(knapSackService.calcMaxCost)).toBe(true);
    });

    it('should make text exciting', function (){
        var result = knapSackService.calcMaxCost([6,4,3,2,5], [5,3,1,3,6], 15);
        expect(result).toEqual([4,1,0]);
    });



});
